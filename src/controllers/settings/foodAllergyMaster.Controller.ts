import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import foodAllergyMasterUseCase from "../../useCases/user/foodAllergyMaster.useCase"
import { Request, Response } from "express"

export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = foodAllergyMasterUseCase.getFoodAllergyMasterById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await foodAllergyMasterUseCase.getFoodAllergyMasterByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const result = await foodAllergyMasterUseCase.createFoodAllergyMaster(body)
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await foodAllergyMasterUseCase.updateFoodAllergyMasterById(body)
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