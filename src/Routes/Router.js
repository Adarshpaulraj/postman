const express=require('express')
const data =require("../conroler/Coupons")
const router=express.Router()

router.get('/',data.getAllCoupons)
router.get('/:id',data.getCouponsById)
router.post('/',data.createCoupons)
router.delete('/:id',data.deleteCoupons)
router.put('/:id',data.editCouponsByid)
 


module.exports = router