const express = require('express')
const router = express.Router()

const usersController=require('../conroler/users')
router.get('/',usersController.getUSers)
router.post('/',usersController.createUser)
router.get('/:id',usersController.getUserByid)
router.put('/:id',usersController.editUserByid)
router.delete('/:id',usersController.deleteUserByid)
module.exports=router