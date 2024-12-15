console.log("this is another module")

// By Default Module Protect their variables and functions from leaking
var x = 50;

function calculateSum(a, b) {
    console.log(a + b)
}
// if we want to use this variable and function another module then we have to explicitly export it

// module.exports = calculateSum
// or we can export both as object

module.exports = {
    x: x,
    calculateSum: calculateSum
}