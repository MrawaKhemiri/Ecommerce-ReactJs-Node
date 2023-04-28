import express from 'express'
import { addclient,connectclient,Signup}from '../controller/clientcontroller.js'
const router =express.Router()

router.route('/inscription').post(addclient)

router.route('/login').post(connectclient)
router.route('/logout').get(Signup)



export default router
