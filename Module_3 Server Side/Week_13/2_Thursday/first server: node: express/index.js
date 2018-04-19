var http = require("http");

var PORT = process.argv[2];

var handleRequest = function (req, res) {
res.end("It Works! Path: " + req.url)

};

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
console.log("Server listing!");
})