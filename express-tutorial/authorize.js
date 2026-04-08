// const authorize = (req,res,next) => {
//     console.log('authorise')
//     next()
// }

const authorize = (req, res, next) => {
  const { user } = req.query
  if (user === 'john') {
    req.user = { name: 'john', id: 1 }
    next()
  } else {
    res.status(401).send('Unauthorized')
  }
  // console.log('authorise')
  // next()
}

module.exports = authorize
