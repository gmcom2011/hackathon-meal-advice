import { Response, Request } from "express"
import { InternalServerError } from "http-errors"
import prisma from "../src/utility/db"
const tokenAuthorizer = async (req: Request, res: Response, next: any) => {
    const { userToken } = req.headers
    console.log(`${req.method} => ${req.path}`)
    try {
        const userData = await prisma.users.findFirst({ where: { token: userToken as string } })
        if (!userData) throw new InternalServerError("USER_NOT_FUOND")
        req.body = { userData, ...req.body }
        next()
    } catch (error) {
        console.log(error)
        res.status(401)
        res.send({
            message: 'Unauthorized'
        })
    }
}
export { tokenAuthorizer }