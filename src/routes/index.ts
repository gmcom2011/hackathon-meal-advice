import express from "express"
import settingRoute from "./setting.router"
import userRoute from "./user.router"
import transactionRoute from "./transaction.router"


const router = express.Router()

router.use(settingRoute)
router.use(userRoute)
router.use(transactionRoute)



export default router