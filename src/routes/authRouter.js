import { Router } from 'express'
import authController from '../controllers/authController.js'

const router = Router()

router.post('/signUp', authController.signUp)

router.post('/signIn', authController.signIn)

export default router
