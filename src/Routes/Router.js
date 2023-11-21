import express from "express"
 import data from "../conroler/Coupons.js"
const router=express.Router()

router.get('/',data.getAllCoupons)
router.get('/:id',data.getCouponsById)
router.post('/',data.createCoupons)
router.delete('/:id',data.deleteCoupons)
router.put('/:id',data.editCouponsByid)
 


export default router