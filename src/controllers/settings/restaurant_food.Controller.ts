import prisma from "../../utility/db"
import { InternalServerError } from 'http-errors'

export default Object.freeze({
    get: async (request: any) => {
        const { params } = request
        const { id } = params
        try {
            const result = await prisma.restaurant_food.findUnique({
                where: {
                    id
                }
            })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    list: async (request: any) => { },
    create: async (request: any) => {
        const { body } = request
        const {
            name,
            image_path,
            latitude,
            longtitude,
            rating,
            description,
        } = body
        try {
            const result = await prisma.restaurant.create({
                data: {
                    name,
                    image_path,
                    latitude,
                    longtitude,
                    rating,
                    description,
                    status: true
                },
                include: {
                    restaurant_food: true
                }
            })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    update: async (request: any) => {
        const { body } = request
        const {
            id,
            name,
            image_path,
            latitude,
            longtitude,
            rating,
            description,
        } = body
        try {
            const result = await prisma.restaurant.update({
                where: { id },
                data: {
                    name,
                    image_path,
                    latitude,
                    longtitude,
                    rating,
                    description,
                    status: true
                },
            })
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    delete: async (request: any) => {
        const { body } = request
        const {
            id
        } = body
        try {
            const result = await prisma.restaurant.update({
                where: { id },
                data: {
                    status: false
                },
            })
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    }
})