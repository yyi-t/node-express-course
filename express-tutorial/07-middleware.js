const express = require('express')
const app = express()
const { products } = require('./data')

// req => middleware => res
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  // res.send('Testing') //pass on to next middleware or terminate
  next()
}

app.get('/', logger, (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>')
})

app.get('/about', logger, (req, res) => {
  res.send('<h1>About page</h1>')
})

app.all('/{*path}', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})
