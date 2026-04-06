// event-driven programming
const EventEmitter = require('events')

const customEmmitter = new EventEmitter()
// on -- listen
// emit -- emit event
// order matters, need to listen first then only emit

customEmmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id:${id}.`)
})

customEmmitter.emit('response', 'john', 34)
