import express from "express"
import settingRoute from "./setting.router"

const router = express.Router()

router.use(settingRoute)


export default router