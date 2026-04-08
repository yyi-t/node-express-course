// express router + controllers
// npc
// grouping similar path
const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))

// parse json
app.use(express.json())
// built in middleware by express to parse form data
app.use(express.urlencoded({ extended: false }))

app.use('/api/people', people)
app.use('/auth', auth)

app.listen(5000, () => {})
