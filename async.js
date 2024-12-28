const fs = require("fs")
const https = require("https")

console.log("Hello World")

var a = 1078654;
var b = 7865

// Synchronous
fs.readFileSync("./file.txt", "utf8"); //100 ms
console.log("")

https.get("https://dummyjson.com/producrts/1", (res) => {
    console.log("Fetched Data Successfully")
});

setTimeout(() => {
    console.log("setTimeout called after 5 seconds ")
}, 5000)

fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data : ", data)
})

function multiply(a, b) {
    const result = a * b;
    return result;
}

var c = multiply(a, b)

console.log("Multiplication result is : " + c)