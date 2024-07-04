import prisma from "../../utility/db";
import { InternalServerError } from 'http-errors'
import security from "../../utility/security";
export default Object.freeze({
    register: async (params: {
        username: string
        password: string
        token: string
        mobile_phone: string
        displatName: string
        imagePath: string
    }) => {
        try {
            const { password, ...userInfo } = params
            await prisma.users.create({ data: { ...userInfo, password: security.encryption.encrypt(password, 'aes-256-cbc') } })
            return "REGISTER_SUCCESSFULLY"
        } catch (error) {
            console.log(error)
            throw new InternalServerError("INTERNAL_SERVER_ERROR")
        }
    }
})