import express from 'express'
const router =express.Router()
import {comfirmorder,getalldata,getCart,shop,deleteFromCart,displayCart,affichagepanier,addCard} from '../controller/paniercontroller.js'


router.route('/affichagepanier').get(affichagepanier)

router.route('/addcard/:id').post(addCard)

router.route('/displaycart').get(displayCart)
router.route('/deletefromcart/:id').get(deleteFromCart)
router.route('/shop').get(shop)
router.route('/getcart').get(getCart)
router.route('/getalldata').get(getalldata)
router.route('/comfirmorder/:id').put(comfirmorder)
export default router