import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import mealMaster from "../../useCases/mealMaster.useCase"
import { Request, Response } from "express"
export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = mealMaster.getMealMasterById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await mealMaster.getMealMasterByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const {
            name,
            description
        } = body
        const result = await mealMaster.createMealMaster({
            name, description
        })
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await mealMaster.updateMealMasterById(body)
        return "UPDATE_RESTAURANT_SUCCESS"
    },
})