const express = require('express')
const path = require('path')
const app = express()

//set up static and middleware
app.use(express.static('./public'))

// app.get('/', (req,res)=> {
//     res.sendFile(path.join(__dirname, './navbar-app/index.html'))
// })

// adding to static assets then the app automatically serve index.html from public folder
// server side rendering

app.all('/{*path}', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})
