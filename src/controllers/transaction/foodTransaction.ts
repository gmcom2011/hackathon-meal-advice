import { Request } from 'express'
import userUseCase from '../../useCases/user/user.useCase'
import authUseCase from '../../useCases/user/auth.useCase'
import registerUseCase from '../../useCases/user/register.useCase'
import foodTransactionUseCase from '../../useCases/transaction/foodTransaction.useCase'

export default Object.freeze({
    getFoodOption: async (request: Request) => {
        const { body } = request
        const { userData, ...dataBody } = body
        return await foodTransactionUseCase.getFoodRamdom(userData.id)
    },

    createTransaction: async (request: Request) => {
        const { body } = request
        const { userData, ...dataBody } = body
        return await foodTransactionUseCase.createFoodTransaction(userData.id, dataBody)
    },
})