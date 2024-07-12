import prisma from "../../utility/db";
import { InternalServerError } from 'http-errors'
import security from "../../utility/security";
export default Object.freeze({
    register: async (params: {
        // username: string
        // password: string
        token: string
        displayName: string
    }) => {
        try {
            const { ...userInfo } = params
            await prisma.users.create({ data: { ...userInfo } })
            return "REGISTER_SUCCESSFULLY"
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    }
})