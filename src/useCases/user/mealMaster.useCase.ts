import prisma from "../../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getMealMasterById: async (id: string) => {
        try {
            const result = await prisma.meal_master.findUnique({ where: { id } })
            if (!result) throw new BadRequest("RESTAURANT_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getMealMasterByCondition: async (params: {
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

            const totalCount = await prisma.meal_master.count({ where: { ...filter } })
            const data = await prisma.meal_master.findMany({ where: { ...filter }, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createMealMaster: async (params: {
        name: string;
        description: string;
    }) => {
        try {
            const result = await prisma.meal_master.create({ data: params })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateMealMasterById: async (params: {
        id: string;
        name: string;
        description: string;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.meal_master.update({ where: { id }, data: updateData })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    }

})