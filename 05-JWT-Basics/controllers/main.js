// check username, password 
// if exist, create new JWT
// send it back to front-end

// setup authentication so only the request with JWT can access the dashboard



const login = async (req, res) => {
  res.send('Fake Login/Register/Signup Route')
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
