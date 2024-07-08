import prisma from "../../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getActionCodeById: async (id: string) => {
        try {
            const result = await prisma.action_code.findUnique({ where: { id }, include: { action_transaction: true} })
            if (!result) throw new BadRequest("RESTAURANT_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getActionCodeByCondition: async (params: {
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

            const totalCount = await prisma.action_code.count({ where: { ...filter } })
            const data = await prisma.action_code.findMany({ where: { ...filter }, include: { action_transaction:true }, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createActionCode: async (params: {
        code:string;
        description: string;
    }) => {
        try {
            const result = await prisma.action_code.create({data: params})
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateActionCodeById: async (params: {
        id: string;
        code:string;
        description: string;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.action_code.update({ where: { id }, data: updateData })
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