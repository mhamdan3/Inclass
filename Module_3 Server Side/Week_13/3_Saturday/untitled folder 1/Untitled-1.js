var express =require("express");

const PORT = 3000;
var app = express;

app.get("/hello", function(require, res) {
    res.send("hello, world!");
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});