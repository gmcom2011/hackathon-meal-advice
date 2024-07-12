import express from "express"
import settingRoute from "./setting.router"
import userRoute from "./user.router"

const router = express.Router()

router.use(settingRoute)
router.use(userRoute)



export default router