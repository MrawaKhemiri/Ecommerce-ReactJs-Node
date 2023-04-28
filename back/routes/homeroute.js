import express from 'express'
const router =express.Router()
import pagehome from '../controller/homecontroller.js'
router.route('/').get(pagehome)

export default router