import 'dotenv/config'

import prisma from '../lib/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default {
  signUp: async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10)

    return prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    })
  },

  signIn: async (username, password) => {
    const user = await prisma.user.findUnique({ where: { username } })

    if (!user) throw new Error('User not found')

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) throw new Error('Invalid password')

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '2d',
    })

    return { user, token }
  },

  findUserById: async (id) => {
    const user = await prisma.user.findUnique({
      where: { id },
    })

    return user
  },
}