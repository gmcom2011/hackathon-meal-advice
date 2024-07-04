import prisma from "../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getRestaurantFoodById: async (id: string) => {
        try {
            const result = await prisma.restaurant_food.findUnique({ where: { id }, include: { food_transaction: true, restaurant_food_allergy: true, restaurant: true, food_group: true } })
            if (!result) throw new BadRequest("RESTAURANT_FOOD_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getRestaurantFoodByCondition: async (params: {
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

            const totalCount = await prisma.restaurant_food.count({ where: { ...filter } })
            const data = await prisma.restaurant_food.findMany({ where: { ...filter }, include: { food_transaction: true, restaurant_food_allergy: true, restaurant: true, food_group: true }, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createRestaurantFood: async (params: {
        restaurant_id: string;
        food_group_id: string;
        name: string;
        image_path: string;
        price: number;
        rating: number;
        description: string;
        status: boolean;
    }) => {
        try {
            const result = await prisma.restaurant_food.create({data: params})
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateRestaurantFoodById: async (params: {
        id: string;
        restaurant_id: string;
        food_group_id: string;
        name: string;
        image_path: string;
        price: number;
        rating: number;
        description: string;
        status: boolean;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.restaurant_food.update({ where: { id }, data: updateData })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    disableRestaurantFoodById: async (id: string) => {
        try {
            const result = await prisma.restaurant_food.update({
                where: { id }, data: { status: false }
            })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

})