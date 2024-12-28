const crypto = require("node:crypto")
// const crypto = require("crypto") // aother way to import node module

console.log("Hello world")

var a = 102456
var b = 20554

// pbkdf2 -  password Base key Derivative Function

// Synchronous Function || Will block the main thread || Don't use it
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First Key is Generated");

setTimeout(() => {
    console.log("call me right now");
}, 0) // it will only be called once call stack of main thread is empty

// Asynchronous function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Second key is generated");
});

function multiplyFn(x, y) {
    const result = a * b;
    return result
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c)

