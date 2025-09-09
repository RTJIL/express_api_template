import 'dotenv/config'

import authService from '../services/authService.js'
import jwt from 'jsonwebtoken'

export default {
  signUp: async (req, res, next) => {
    const { username, password } = req.body

    try {
      const user = await authService.signUp(username, password)
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '2d',
      })

      res.status(200).json({ user, token })
    } catch (err) {
      next(err)
    }
  },

  signIn: async (req, res, next) => {
    const { username, password } = req.body

    try {
      const { user, token } = await authService.signIn(username, password)

      res.json({ userId: user.id, token })
    } catch (err) {
      next(err)
    }
  },
}
