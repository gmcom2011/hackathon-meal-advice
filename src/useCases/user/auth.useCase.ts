import prisma from "../../utility/db";
import { InternalServerError, BadRequest } from 'http-errors'
import security from "../../utility/security";
export default Object.freeze({
    signIn: async (params: {
        username: string
        password: string
    }) => {
        try {
            const user = await prisma.users.findFirst({ where: { username: params.username, password: security.encryption.encrypt(params.password, 'aws-s56-cbc') } })
            if (!user) throw new BadRequest("USER_NOT_FOUND")
            return user

        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    }
})