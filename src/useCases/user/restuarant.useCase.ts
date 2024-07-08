import prisma from "../../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getRestaurantById: async (id: string) => {
        try {
            const result = await prisma.restaurant.findUnique({ where: { id }, include: { restaurant_food: true } })
            if (!result) throw new BadRequest("RESTAURANT_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getRestaurantByCondition: async (params: {
        filter: any;
        page: number,
        row: number
        sort: any[]
    }) => {
        try {
            const { page, row, filter, sort } = params
            let pagination = {}
            if (page && row) {
                const skip = (page - 1 * row)
                const take = row
                pagination = { skip, take }
            }

            const totalCount = await prisma.restaurant.count({ where: { ...filter } })
            const data = await prisma.restaurant.findMany({ where: { ...filter }, include: { restaurant_food: true }, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createRestaurant: async (params: {
        name: string;
        image_path: string;
        latitude: string;
        longtitude: string;
        rating: number;
        description: string;
        status: true;
    }) => {
        try {
            const result = await prisma.restaurant.create({ data: params })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateRestaurantById: async (params: {
        id: string;
        name: string;
        image_path: string;
        latitude: string;
        longtitude: string;
        rating: number;
        description: string;
        status: true;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.restaurant.update({ where: { id }, data: updateData })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    disableRestaurantById: async (id: string) => {
        try {
            const result = await prisma.restaurant.update({
                where: { id }, data: { status: false }
            })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

})