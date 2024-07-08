import prisma from "../../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getFoodGroupMasterById: async (id: string) => {
        try {
            const result = await prisma.food_group_master.findUnique({ where: { id }, include: { food_favorite: true, restaurant_food:true, food_transaction:true} })
            if (!result) throw new BadRequest("RESTAURANT_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getFoodGroupMasterByCondition: async (params: {
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

            const totalCount = await prisma.food_group_master.count({ where: { ...filter } })
            const data = await prisma.food_group_master.findMany({ where: { ...filter }, include: { food_favorite: true, restaurant_food:true, food_transaction:true }, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createFoodGroupMaster: async (params: {
        name:string;
        description: string;
    }) => {
        try {
            const result = await prisma.food_group_master.create({data: params})
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateFoodGroupMasterById: async (params: {
        id: string;
        name:string;
        description: string;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.food_group_master.update({ where: { id }, data: updateData })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    /*
    disableFoodGroupMasterById: async (id: string) => {
        try {
            const result = await prisma.food_group_master.update({
                where: { id }, data: { status: false }
            })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },*/

})