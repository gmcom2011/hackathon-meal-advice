import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import foodFavoriteUseCase from "../../useCases/user/foodFavorite.useCase"
import { Request, Response } from "express"

export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = foodFavoriteUseCase.getFoodFavoriteById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await foodFavoriteUseCase.getFoodFavoriteByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const result = await foodFavoriteUseCase.createFoodFavorite(body)
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await foodFavoriteUseCase.updateFoodFavoriteById(body)
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