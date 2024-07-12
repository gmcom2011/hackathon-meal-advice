import { Response, Request } from "express"
import { InternalServerError } from "http-errors"
import prisma from "../src/utility/db"
const tokenAuthorizer = async (req: Request, res: Response, next: any) => {
    const { authorization } = req.headers
    console.log(req.headers)
    console.log(`${req.method} => ${req.path}`)
    console.log(authorization)
    try {
        const userData = await prisma.users.findFirst({ where: { token: authorization as string } })
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