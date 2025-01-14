const http = require("http");

const server = http.createServer(function (req, res) {
    if(req.url === "/getSecretData"){
        res.end("No secret data")
    }
    res.end("Hello world")
})

server.listen(7777);