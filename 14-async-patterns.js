// js read code line by line, it will only do task 2 after finishing task 1
// js is synchronous and single threaded
// offloading to browser
// console.log('first task')
// setTimeout(() => {
//     console.log('second task')
// }, 0)
// console.log('next task')

// setTimeout is from browser
// result on console log, even when timeout is 0
// first task
// next task
// second task

// node js event loop
// resource: How the node.js event loop works by nodejs.dev(cant find)
// youtube:  Morning Keynote- Everything You Need to Know About Node.js Event Loop - Bert Belder, IBM by node.js

// showing blocking code(not async) will block whole server
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end('Home Page')
//     } else if (req.url === '/about') {
//         // Blocking code, this blocks the other page too as it uses the thread
//         for(let i=0; i< 100; i++) {
//             for(let j=0; j<1000; j++) {
//                 console.log(`${i} ${j}`)
//             }
//         }
//         res.end('About page')
//     } else {
//         res.end('Error Page')
//     }
// })

// server.listen(5000, ()=> {
//     // this run once on load
//     console.log("Server listening on port 5000...")
// })

// rewriting 11-fs-async
const { readFile, writeFile } = require('fs')

//  readFile('./content/first.txt', 'utf8', (err, data) => {
//     if(err) {
//         return
//     } else {
//         console.log(data)
//     }
//  })

// turn this into promise
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// getText('./content/first.txt').then((result) => {
//     console.log(result).catch((err) => console.log(err))
// })

// here using the promise's getText
const start = async () => {
  try {
    const first = await getText('./content/first.txt')
    const second = await getText('./content/second.txt')
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// another way to write the promise by using the node's util
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start2 = async () => {
  try {
    const first = await readFilePromise('./content/first.txt', 'utf8')
    const second = await readFilePromise('./content/second.txt', 'utf8')
    await writeFilePromise(
      './content/result-mind-grenade.txt',
      `This is awesome: ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

// even better way to writing the promisify is
const { readFile, writeFile } = require('fs').promises
