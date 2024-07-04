import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import restaurantFoodUseCase from "../../useCases/restaurantFood.useCase"
import { Request, Response } from "express"

export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = restaurantFoodUseCase.getRestaurantFoodById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await restaurantFoodUseCase.getRestaurantFoodByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const result = await restaurantFoodUseCase.createRestaurantFood(body)
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await restaurantFoodUseCase.updateRestaurantFoodById(body)
        return "UPDATE_RESTAURANT_SUCCESS"
    },
    disable: async (request: Request) => {
        const { body } = request
        const {
            id
        } = body
        await restaurantFoodUseCase.disableRestaurantFoodById(id)
        return 'DISABLE_RESTAURANT_SUCCESS'
    }
})