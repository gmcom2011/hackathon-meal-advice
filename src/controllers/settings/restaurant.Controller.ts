import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'
import restuarantUseCase from "../../useCases/restuarant.useCase"
import { Request, Response } from "express"

export default Object.freeze({
    get: async (request: Request) => {
        const { params } = request
        const { id } = params
        const result = restuarantUseCase.getRestauirantById(id)
        return result
    },
    list: async (request: Request) => {
        const { body } = request
        const result = await restuarantUseCase.getRestauirantByCondition(body)
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
        const result = await restuarantUseCase.createRestauirant({
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
        await restuarantUseCase.updateRestauirantById(body)
        return "UPDATE_RESTAURANT_SUCCESS"
    },
    disable: async (request: Request) => {
        const { body } = request
        const {
            id
        } = body
        await restuarantUseCase.disableRestauirantById(id)
        return 'DISABLE_RESTAURANT_SUCCESS'
    }
})