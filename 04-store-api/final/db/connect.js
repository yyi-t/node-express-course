const mongoose = require('mongoose')
const dns = require('node:dns')
dns.setServers(['1.1.1.1', '8.8.8.8'])

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
}

module.exports = connectDB
