import prisma from "../../utility/db";
import { InternalServerError } from 'http-errors'
export default Object.freeze({
    getUserById: async (params: {
        id: string
    }) => {
        try {
            return await prisma.users.findUnique({ where: params, include: { food_allergy: true, food_favorite: true, user_budget: true, } })
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    }
})