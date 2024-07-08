import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import foodAllergyUseCase from "../../useCases/user/foodAllergy.useCase"
import { Request, Response } from "express"

export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = foodAllergyUseCase.getFoodAllergyById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await foodAllergyUseCase.getFoodAllergyByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const result = await foodAllergyUseCase.createFoodAllergy(body)
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await foodAllergyUseCase.updateFoodAllergyById(body)
        return "UPDATE_RESTAURANT_SUCCESS"
    } /*,
    disable: async (request: Request) => {
        const { body } = request
        const {
            id
        } = body
        await actionCodeUseCase.disableActionCodeById(id)
        return 'DISABLE_RESTAURANT_SUCCESS'
    }*/
})