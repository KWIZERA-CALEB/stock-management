import express from 'express'
import { addNewManager, loginUser } from '../controllers/UserController.js'
import { checkValidToken } from '../middlewares/VerifyTokenMiddleware.js'

const router = express.Router()

router.post('/register', checkValidToken, addNewManager)
router.post('/login', loginUser)

export default router