import prisma from "../../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getRestaurantFoodAllergyById: async (id: string) => {
        try {
            const result = await prisma.restaurant_food_allergy.findUnique({ where: { id }, include: { reataurant_food: true, allergy: true } })
            if (!result) throw new BadRequest("RESTAURANT_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getRestaurantFoodAllergyByCondition: async (params: {
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

            const totalCount = await prisma.restaurant_food_allergy.count({ where: { ...filter } })
            const data = await prisma.restaurant_food_allergy.findMany({ where: { ...filter }, include: { reataurant_food: true, allergy: true }, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createRestaurantFoodAllergy: async (params: {
        restaurant_food_id: string;
        allergy_id: string;
    }) => {
        try {
            const result = await prisma.restaurant_food_allergy.create({ data: params })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateRestaurantFoodAllergyById: async (params: {
        id: string;
        restaurant_food_id: string;
        allergy_id: string;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.restaurant_food_allergy.update({ where: { id }, data: updateData })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    /*
    disableActionCodeById: async (id: string) => {
        try {
            const result = await prisma.action_code.update({
                where: { id }, data: { status: false }
            })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },*/

})