import prisma from "../../utility/db";
import { InternalServerError } from 'http-errors'
export default Object.freeze({
    getUserById: async (params: {
        id: string
    }) => {
        try {
            return await prisma.users.findUnique({ where: params, include: { food_allergy: true, food_favorite: true, user_budget: true, } })
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    createUserFoodFavorite: async (userId: string, foodGroupIds: string[]) => {
        try {
            const createData = foodGroupIds.map((foodGroupId: string) => {
                return {
                    group_id: foodGroupId,
                    user_id: userId,
                }
            })
            const createResult = await prisma.food_favorite.createMany({ data: createData })
            console.log(createResult)
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    createUserFoodAllergy: async (userId: string, foodAllergyIds: string[]) => {
        try {
            const createData = foodAllergyIds.map((foodAllergyId: string) => {
                return {
                    allergy_id: foodAllergyId,
                    user_id: userId,
                }
            })
            const createResult = await prisma.food_allergy.createMany({ data: createData })
            console.log(createResult)
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    createBudget: async (userId: string, budget: number) => {
        try {
            const createResult = await prisma.user_budget.create({ data: { user_id: userId, budget, period: 30 } })
            console.log(createResult)
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    }

})