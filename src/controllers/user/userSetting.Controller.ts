import { Request } from 'express'
import userUseCase from '../../useCases/user/user.useCase'

export default Object.freeze({
    createUserFoodData: async (request: Request) => {
        const { body } = request
        const { userData, ...reqBody } = body
        console.log(body)
        userUseCase.createUserFoodFavorite(userData.id, reqBody.foodGroup)
        userUseCase.createUserFoodAllergy(userData.id, reqBody.foodAllergy)
    },
})