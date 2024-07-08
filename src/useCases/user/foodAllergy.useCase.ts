import prisma from "../../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getFoodAllergyById: async (id: string) => {
        try {
            const result = await prisma.food_allergy.findUnique({ where: { id }, include: { user: true, allergy:true} })
            if (!result) throw new BadRequest("RESTAURANT_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getFoodAllergyByCondition: async (params: {
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

            const totalCount = await prisma.food_allergy.count({ where: { ...filter } })
            const data = await prisma.food_allergy.findMany({ where: { ...filter }, include: {user: true, allergy:true}, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createFoodAllergy: async (params: { //
        allergy_id:string;
        user_id: string;
        status: boolean;
        remark: string;
    }) => {
        try {
            const result = await prisma.food_allergy.create({data: params})
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateFoodAllergyById: async (params: {
        id: string;
        user_id: string;
        status: boolean;
        remark: string;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.food_allergy.update({ where: { id }, data: updateData })
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