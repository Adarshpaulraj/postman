import express from "express"
const router = express.Router()
import auth from "../common/auth.js"
import usersController from '../conroler/users.js'

router.get('/',auth.validate,auth.adminGaurd,usersController.getUSers)
router.post('/',usersController.createUser)
router.post('/login',usersController.login)

router.get('/:id',usersController.getUserByid)
router.put('/:id',usersController.editUserByid)
router.delete('/:id',usersController.deleteUserByid)
export default router