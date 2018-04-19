var http = require("http");

var handleRequest = function (req, res) {
res.end("It Works! Path: " + req.url)

};

var server = http.createServer(handleRequest);

server.listen(5000, function() {
console.log("Server listing on: http://localhost:5000 ");
})