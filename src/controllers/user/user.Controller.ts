import { Request } from 'express'
import userUseCase from '../../useCases/user/user.useCase'
import authUseCase from '../../useCases/user/auth.useCase'
import registerUseCase from '../../useCases/user/register.useCase'

export default Object.freeze({
    me: async (request: Request) => {
        const { body } = request
        return await userUseCase.getUserById(body)
    },
    
    register: async (request: Request) => {
        const { body } = request
        return await registerUseCase.register(body)
    },

    signIn: async (request: Request) => {
        const { body } = request
        return await authUseCase.signIn(body)
    }
})