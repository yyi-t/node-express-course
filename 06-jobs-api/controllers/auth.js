const User = require('../models/Users')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  const { name, email, password } = req.body

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({ name, email, password: hashedPassword })
  res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  res.send('login user')
}

module.exports = { register, login }
