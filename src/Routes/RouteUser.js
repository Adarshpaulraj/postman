const express = require('express')
const router = express.Router()

const usersController=require('../conroler/users')
router.get('/',usersController.getUSers)
module.exports=router