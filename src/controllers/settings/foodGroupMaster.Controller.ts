import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import foodGroupMasterUseCase from "../../useCases/user/foodGroupMaster.useCase"
import { Request, Response } from "express"

export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = foodGroupMasterUseCase.getFoodGroupMasterById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await foodGroupMasterUseCase.getFoodGroupMasterByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const result = await foodGroupMasterUseCase.createFoodGroupMaster(body)
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await foodGroupMasterUseCase.updateFoodGroupMasterById(body)
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