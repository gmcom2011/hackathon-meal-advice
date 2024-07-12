import { food_allergy, food_favorite, food_transaction, restaurant_food, restaurant_food_allergy } from "@prisma/client"
import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import moment from "moment"
import _ from 'lodash'
export default Object.freeze({
    getFoodRamdom: async (userId: string) => {
        console.log(userId)
        const userData = await prisma.users.findUnique({ where: { id: userId }, include: { user_budget: true, food_allergy: true, food_favorite: true } })
        const food_transaction = await prisma.food_transaction.findMany({ where: { user_id: userId, created_at: { gte: moment().startOf('day').toDate() } } })
        const userBudget = userData?.user_budget
        if (!userBudget) throw new InternalServerError("USER_BUDGET_NOT_SET")
        const dailyBudget = userBudget[0]?.budget / userBudget[0]?.period
        console.log("dailyBudget", dailyBudget)
        const userDailyTransaction = food_transaction.reduce((accumulator, currentValue: food_transaction) => { return accumulator + currentValue.price },
            0,)
        console.log("userDailyTransaction", userDailyTransaction)
        const dailyBudgetRemain = dailyBudget - userDailyTransaction
        console.log("dailyBudgetRemain", dailyBudgetRemain)
        const foodAllergyIds = userData?.food_allergy.map((row: food_allergy) => row.allergy_id)
        // const foodFavoriteGroupIds = userData?.food_favorite.map((row: food_favorite) => row.group_id)
        const foodAllergy = await prisma.restaurant_food_allergy.findMany({
            where: {
                allergy_id: { in: foodAllergyIds }
            }
        })
        const restaurantFoodAllergyIds = foodAllergy.map((row: restaurant_food_allergy) => row.restaurant_food_id)
        const foodOption = await prisma.restaurant_food.findMany({
            where: {
                id: { notIn: restaurantFoodAllergyIds },
                price: { lte: dailyBudgetRemain }
            }
        })
        // console.log(foodOption)
        const lowCostMenu = foodOption.filter((row: restaurant_food) => row.price <= (dailyBudgetRemain / 100) * 30)
        const meanCostMenu = foodOption.filter((row: restaurant_food) => row.price <= (dailyBudgetRemain / 100) * 50 && row.price > (dailyBudgetRemain / 100) * 30)
        const expensiveCostMenu = foodOption.filter((row: restaurant_food) => row.price > (dailyBudgetRemain / 100) * 50)
        const lowCostResult = lowCostMenu.length > 0 ? _.sample(lowCostMenu) : { dataMatch: "NOT_MATCH" }
        const meanCostResult = meanCostMenu.length > 0 ? _.sample(meanCostMenu) : { dataMatch: "NOT_MATCH" }
        const expensiveCostResult = expensiveCostMenu.length > 0 ? _.sample(expensiveCostMenu) : { dataMatch: "NOT_MATCH" }
        console.log({
            lowCostResult,
            meanCostResult,
            expensiveCostResult
        })
        return {
            lowCostResult,
            meanCostResult,
            expensiveCostResult
        }
    },
    createFoodTransaction: async (userId: string, params: {
        id: string
        food_group_id: string
        price: number
    }) => {
        try {
            console.log(params)
            await prisma.food_transaction.create({
                data: {
                    user_id: userId,
                    food_id: params.id,
                    food_group_id: params.food_group_id,
                    price: params.price
                }
            })
            return 'CREATE_TRANSACTION_SUCCESS'
        } catch (error) {
            console.log(error)
        }
    }
})