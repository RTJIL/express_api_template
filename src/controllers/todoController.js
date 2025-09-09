import todoService from '../services/todoService.js'

export default {
  createTodo: async (req, res, next) => {
    try {
      const userId = req.user.id // passport endpoint
      const { title, description } = req.body

      const todo = await todoService.createTodo(userId, title, description)
      res.status(200).json(todo)
    } catch (err) {
      next(err) // make custom error handler
    }
  },

  getUserTodos: async (req, res) => {
    try {
      const userId = req.user.id

      const { status } = req.query //query ?status=

      const todos = await todoService.getUserTodos(userId, status)

      res.json(todos)
    } catch (err) {
      next(err)
    }
  },

  updateTodo: async (req, res, next) => {
    try {
      const todoId = parseInt(req.params.id)
      const { title, description, status } = req.body

      const todo = await todoService.updateTodo(todoId, {
        title,
        description,
        status,
      })

      res.json(todo)
    } catch (err) {
      next(err)
    }
  },

  deleteTodo: async (req, res, next) => {
    try {
      const todoId = Number(req.params.id)

      const deletedTodo = await todoService.deleteTodo(todoId)

      res.status(200).json(deletedTodo)
    } catch (err) {
      next(err)
    }
  },
}
