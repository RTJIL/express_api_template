import { Router } from 'express'

import todoRouter from './todoRouter.js'
import authRouter from './authRouter.js'

export const routes = Router()

routes.use('/todos', todoRouter)
routes.use('/auth', authRouter)
