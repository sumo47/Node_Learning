// require("./anotherModule.js") // one module into another module

// const anotherModule = require("./anotherModule.js")
// now we can use function and variable of another module

import { calculateSum , x} from "./anotherModule.js";

// const {calculateSum, x} = require("./anotherModule.js")
// destructuring on the fly



console.log(globalThis === global)

var a = 10;
var b = 20;

// calculateSum() 
calculateSum(a,b)
console.log(x)


