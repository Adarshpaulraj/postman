const express=require('express')
const router = express.Router()
 const userRouter=require('./RouteUser')
const couponRouter=require('./Router')
router.use('/users',userRouter)
router.use('/coupons',couponRouter)


module.exports=router