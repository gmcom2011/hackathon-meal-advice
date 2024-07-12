import prisma from "../../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getFoodFavoriteById: async (id: string) => {
        try {
            const result = await prisma.food_favorite.findUnique({ where: { id }, include: { user: true, food_group: true } })
            if (!result) throw new BadRequest("RESTAURANT_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getFoodFavoriteByCondition: async (params: {
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

            const totalCount = await prisma.food_favorite.count({ where: { ...filter } })
            const data = await prisma.food_favorite.findMany({ where: { ...filter }, include: { user: true, food_group: true }, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createFoodFavorite: async (params: {
        group_id: string;
        user_id: string;
        status: boolean;
        remark: string;
    }) => {
        try {
            const result = await prisma.food_favorite.create({ data: params })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateFoodFavoriteById: async (params: {
        id: string;
        group_id: string;
        user_id: string;
        status: boolean;
        remark: string;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.food_favorite.update({ where: { id }, data: updateData })
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