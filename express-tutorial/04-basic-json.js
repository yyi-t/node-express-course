const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/api/product', (req, res) => {
  res.json(products)
})
app.all('/{*path}', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})
