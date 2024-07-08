import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import MealMaster from "../../useCases/user/mealMaster.useCase"
import { Request, Response } from "express"

export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = MealMaster.getMealMasterById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await MealMaster.getMealMasterByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const result = await MealMaster.createMealMaster(body)
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await MealMaster.updateMealMasterById(body)
        return "UPDATE_RESTAURANT_SUCCESS"
    }
})