// check username, password
// if exist, create new JWT
// send it back to front-end
// setup authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
  const { username, password } = req.body || {}

  if (!username || !password) {
    // throw new Error('testing async')
    throw new CustomAPIError('Please provide the username and password', 400)
  }
  // just for demo, normally provided by DB
  const id = new Date().getDate()

  // jwt: try to keep payload small for better experience(less loading)
  // jwt secret: just for demo, in prod use long, complex and unguessable string
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })

  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: 'Hello, John Doe',
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
  })
}

module.exports = {
  login,
  dashboard
}
