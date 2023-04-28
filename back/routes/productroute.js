import express from 'express'
const router =express.Router()
import {searchproduct,getCategoryById,updateCategory,deleteCategory,updateProduct,deleteProduct,addproduct,addCategory,getCategory,displayArticle,displayOneProduct} from '../controller/productcontroller.js'

router.route('/addproduct').post(addproduct)

router.route('/addcategory').post(addCategory)
router.route('/getcategory').get(getCategory)
router.route('/deletecategory/:id').get(deleteCategory)
router.route('/updatecategory/:id').post(updateCategory)
router.route('/getcategory/:id').get(getCategoryById)
router.route('/getarticle').get(displayArticle)
router.route('/details/:id').get(displayOneProduct)
router.route('/delete/:id').delete(deleteProduct)
router.route('/updateProduct/:id').put(updateProduct)
router.route('/searchproduct').post(searchproduct)
export default router