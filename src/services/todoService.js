import prisma from '../lib/db.js'

export default {
  createTodo: (userId, title, description) => {
    return prisma.todo.create({
      data: {
        title,
        description,
        userId,
      },
    })
  },

  getUserTodos: (userId, status) => {
    const filter = { userId }
    if (status) filter.status = status

    return prisma.todo.findMany({
      where: filter,
      orderBy: { createdAt: 'desc' },
    })
  },

  updateTodo: (todoId, data) => {
    return prisma.todo.update({
      where: { id: todoId },
      data,
    })
  },

  deleteTodo: (todoId) => {
    return prisma.todo.delete({
      where: { id: todoId },
    })
  },
}
