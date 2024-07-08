import prisma from "../../utility/db"
import { InternalServerError, BadRequest } from 'http-errors'

export default Object.freeze({
    getFoodAllergyMasterById: async (id: string) => {
        try {
            const result = await prisma.food_allergy_master.findUnique({ where: { id }, include: { food_allergy: true, restaurant_food_allergy:true} })
            if (!result) throw new BadRequest("RESTAURANT_NOT_FOUND")
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    getFoodAllergyMasterByCondition: async (params: {
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

            const totalCount = await prisma.food_allergy_master.count({ where: { ...filter } })
            const data = await prisma.food_allergy_master.findMany({ where: { ...filter }, include: {  food_allergy: true, restaurant_food_allergy:true }, ...pagination, orderBy: sort })
            return { data, totalCount }
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },

    createFoodAllergyMaster: async (params: {
        name:string;
        description: string;
    }) => {
        try {
            const result = await prisma.food_allergy_master.create({data: params})
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    updateFoodAllergyMasterById: async (params: {
        id: string;
        name:string;
        description: string;
    }) => {
        try {
            const { id, ...updateData } = params
            const result = await prisma.food_allergy_master.update({ where: { id }, data: updateData })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },
    /*
    disableFoodAllergyMasterById: async (id: string) => {
        try {
            const result = await prisma.food_allergy_master.update({
                where: { id }, data: { status: false }
            })
            return result
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    },*/

})