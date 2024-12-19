function xyz (){
    const a = "sumo"
    function b(){
        return console.log("insider function")
    }
    b()
}

console.log("module exported")



// console.log(a) // give error , scope problem

module.exports = {xyz}