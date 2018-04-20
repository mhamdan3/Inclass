var http = require("http");
var url = require("url");

var PORT = 5000;

var displayHome = function () {
  var myHtml = "<html>";

  myHtml += "<body><h1>Home Page!</h1>";
  myHtml += "<a href='/portfolio'>Portfolio</a>";
  myHtml += "</body></html>";

  return myHtml;
};

var handleRequest = function (req, res) {
  var urlParts = url.parse(req.url);

  switch (urlParts.pathname) {
    case "/":
      res.writeHead(200, { "Content-type": "text/html" });
      res.end(displayHome());
      break;
    case "/portfolio":
      res.end("Portfolio Page!");
      break;
    case "/edit":
      res.end("Edit Page!");
      break;
    default:
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("Uh oh not found!");
      break;
  }
};

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
  console.log("Server Started on: " + PORT);
});