import prisma from "../../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getActionTransactionById: async (id: string) => {
        try {
            const result = await prisma.action_transaction.findUnique({ where: { id }, include: { user: true, action:true} })
            if (!result) throw new BadRequest("RESTAURANT_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getActionTransactionByCondition: async (params: {
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

            const totalCount = await prisma.action_transaction.count({ where: { ...filter } })
            const data = await prisma.action_transaction.findMany({ where: { ...filter }, include: { user: true, action:true }, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createActionTransaction: async (params: {
        user_id: string;
        action_id: string;
    }) => {
        try {
            const result = await prisma.action_transaction.create({data: params})
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateActionTransactionById: async (params: {
        id: string;
        user_id: string;
        action_id: string;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.action_transaction.update({ where: { id }, data: updateData })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    /*
    disableActionTransactionById: async (id: string) => {
        try {
            const result = await prisma.action_transaction.update({
                where: { id }, data: { status: false }
            })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },*/

})