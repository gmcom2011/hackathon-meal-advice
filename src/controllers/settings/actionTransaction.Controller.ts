import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import actionTransactionUseCase from "../../useCases/user/actionTransaction.useCase"
import { Request, Response } from "express"

export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = actionTransactionUseCase.getActionTransactionById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await actionTransactionUseCase.getActionTransactionByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const result = await actionTransactionUseCase.createActionTransaction(body)
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await actionTransactionUseCase.updateActionTransactionById(body)
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