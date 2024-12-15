// require("./anotherModule.js") // one module into another module

const anotherModule = require("./anotherModule.js")
// now we can use function and variable of another module



console.log(globalThis === global)

var a = 10;
var b = 20;

// calculateSum() 
anotherModule.calculateSum(a,b)
console.log(anotherModule.x)


