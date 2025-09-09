import { Router } from 'express'
import passport from '../lib/passport.js'
import todoController from '../controllers/todoController.js'

const router = Router()

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  todoController.getUserTodos
)

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  todoController.createTodo
)

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  todoController.updateTodo
)

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  todoController.deleteTodo
)

export default router
