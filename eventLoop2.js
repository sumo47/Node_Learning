const fs = require("fs")
const a = 100;

setImmediate(() => console.log("setImmediate"))

Promise.resolve("Promise").then( console.log)

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CB")
})

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(()=> console.log("Process.nextTick"))

function printA() {
    console.log("a = ", a)
}

printA();
console.log("Last line of the file.");

// output
// a = 100 =>
//  Last Line of the file 
//  =>nextTick => 
// promise => 
//  settimeout =>
//  setImmediate => 
// File Reading CB => 

//* Event loop at poll phase in ideal condition