// npm - global command, comes with Node
// npm --version to check npm

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// install as dev dependencies
// npm i <packageName> --save-dev
// npm i <packageName> -D

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// once use refresh in vscode, there will be node_modules
// where all dependencies are stored

// some packages has other dependencies (like bootstrap has @popperjs)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

// to allow others to install the dependencies
// npm install

// uninstall package
// npm uninstall <packageName>

// nuclear approach, manually remove unwanted dependency then remove node_module + lock file
// then run npm install again to get the lock file n node module

// to know more about package.json --> nodesource.com 's the basics of package.json
// https://nodesource.com/blog/the-basics-of-package-json
