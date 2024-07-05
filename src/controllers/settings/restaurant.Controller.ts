import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import restuarantUseCase from "../../useCases/restuarant.useCase"
import { Request, Response } from "express"
console.log("Hello world")
export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = restuarantUseCase.getRestaurantById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await restuarantUseCase.getRestaurantByCondition(body)
        return result
    },
    create: async (request: Request) => {
        const { body } = request
        const {
            name,
            image_path,
            latitude,
            longtitude,
            rating,
            description,
        } = body
        const result = await restuarantUseCase.createRestaurant({
            name,
            image_path,
            latitude,
            longtitude,
            rating,
            description,
            status: true
        })
        return result
    },
    update: async (request: Request) => {
        const { body } = request
        await restuarantUseCase.updateRestaurantById(body)
        return "UPDATE_RESTAURANT_SUCCESS"
    },
    disable: async (request: Request) => {
        const { body } = request
        const {
            id
        } = body
        await restuarantUseCase.disableRestaurantById(id)
        return 'DISABLE_RESTAURANT_SUCCESS'
    }
})