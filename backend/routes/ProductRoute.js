import express from 'express'
import { addNewProduct, fetchProducts, deleteProduct } from '../controllers/ProductController.js'
import { checkValidToken } from '../middlewares/VerifyTokenMiddleware.js'

const router = express.Router()

router.post('/products/add', checkValidToken, addNewProduct)
router.get('/products/all', checkValidToken, fetchProducts)
router.delete('/products/delete/:productId', checkValidToken, deleteProduct)

export default router