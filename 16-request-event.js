const http = require('http')

const server = http.createServer()

// built in module server has event emitter api
// using event emitter api to emit request event
// we subscribe/listen to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)
