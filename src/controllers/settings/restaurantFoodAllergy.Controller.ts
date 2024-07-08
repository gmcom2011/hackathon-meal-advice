import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import actionCodeUseCase from "../../useCases/user/actionCode.useCase"
import { Request, Response } from "express"

export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = actionCodeUseCase.getActionCodeById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await actionCodeUseCase.getActionCodeByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const result = await actionCodeUseCase.createActionCode(body)
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await actionCodeUseCase.updateActionCodeById(body)
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