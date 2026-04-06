// CommonJS, every file is module (by default)
// Modules  -- Encapsulated Code (only share minumum)
// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi("Susan")
// sayHi(john)
// sayHi(peter)

// TWO method to import multiple names
// number 1
const names = require('./04-names')
const sayHi = require('./05-utils')
// console.log(names)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

// number 2
// or destruct the names
// const {john, peter} = require('./04-names')
// const sayHi = require('./05-utils')
// // console.log(names)

// sayHi("Susan")
// sayHi(john)
// sayHi(peter)

// for alternative flavor
// const data = require('./06-alternative-flavor')

// console.log(data)

// mind-grenade
// function inside a module,
// then we invoke the function in another module,
// it will run, even when it's not assigned to a variable
// require('./07-mind-grenade')
