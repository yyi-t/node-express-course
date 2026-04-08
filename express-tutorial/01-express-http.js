const express = require('express')
const app = express()

// or you can just call app= require('express')
// it has all api method
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

app.get('/', (req, res) => {
  console.log('user hits home page')
  res.send('Home page')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

//handles all method
app.all('/{*path}', (req, res) => {
  res.status(404).send('<h1>resource not found </h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})
