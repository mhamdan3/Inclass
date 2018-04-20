var http = require("http");
var fs = require("fs");

var PORT = 5000;
var handleRequest = function (req, res) {
    fs.readFile("index.html", function (err, data)
    if (err) {
        res.writehead(500);

        return console.error(err);
    }

    res.writeHead(200, {"Content-Type": "text/html" });
});
};

var 