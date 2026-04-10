const mongoose = require('mongoose')
const dns = require('node:dns')
dns.setServers(['1.1.1.1', '8.8.8.8'])

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log('CONNECTED TO THE DB...'))
    .catch((err) => console.log(err))
}

module.exports = connectDB
