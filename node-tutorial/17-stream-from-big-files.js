// for streams
// writeable, readable, duplex, transform
// extends event

// in file 14, did async and assigned to a variable (small file)

const { createReadStream } = require('fs')

// const stream = createReadStream('./content/big.txt')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
const stream = createReadStream('./content/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf8'
})
stream.on('data', (result) => {
  console.log(result)
})

stream.on('error', (err) => {
  console.log(err)
})
