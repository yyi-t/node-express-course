const notFound = (req, res) => res.status(404).send('Route does not have exist')

module.exports = notFound
