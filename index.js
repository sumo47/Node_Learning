// require("./anotherModule.js") // one module into another module

// const anotherModule = require("./anotherModule.js")
// now we can use function and variable of another module

// import { calculateSum, x } from "./anotherModule.js";

// const {calculateSum, x} = require("./anotherModule.js")
// destructuring on the fly

// const {multiplicationFunction, sum} = require('./calculate/index')
const {multiplicationFunction, sum} = require('./calculate') // we can now just require folder and nodejs will manage all things
// because of index file
// this is how we group file


console.log(globalThis === global)

var a = 10;
var b = 20;

// calculateSum() 
// calculateSum(a, b)
// console.log(x)
multiplicationFunction(a,b)
sum(a,b)


//! how to import json
const data = require("./data.json")

console.log(data)

