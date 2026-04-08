const express = require('express')
const app = express()
const { products } = require('./data')
const logger = require('./logger')
const authorize = require('./authorize')

// order matters, with this we dont need to add logger to every endpoint
// applies to all path after this line
app.use(logger)

// app.use('/api', logger)
// path specific -- this works on all api route
// api/products/1/blah

// multi middleware
// app.use([logger, authorize])
// the order matters, the console.log will be different

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>')
})

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.get('/api/items', (req, res) => {
  res.send('<h1>Items</h1>')
})

app.all('/{*path}', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})
