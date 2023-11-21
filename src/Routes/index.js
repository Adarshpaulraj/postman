import express from "express"
import userRouter from './RouteUser.js'
import couponRouter from './Router.js'

const router = express.Router()
 router.use('/users',userRouter)
router.use('/coupons',couponRouter)


export default router