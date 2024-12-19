require("./anotherModule")
// All the code of module is wrapped inside a function(IIFE) when require invoked
// IIFE - Immediately Invoked Function Expression

(function(){
 // all code of the module runs inside here 
})() // here we immediately call it
// when we wrapped inside paranthese it become expression

(function (){})()  // - now it become immediately invoked function expression
// Privacy - it keeps var & funciton safe 

// (function (module, require){
//     require(/* path */)
//     function xyz (){
//         const a = "sumo"
//         function b(){
//             return console.log("insider function")
//         }
//         b()
//     }
    
//     console.log("module exported")
//     module.exports = {xyz}

// })()

//? how are variable & function private in different module?
// IIFE & require(statement) -- (wrapping value)

//? How do you get access to module.exports ?
// Node js passes module as one of the parameter to the IIFE.

const util = require("node:util")
//inbuilt module
