var input = process.argv.slice();
var operation = input[2];
var a = input[3];
var b = input[4];

var methods = {
    add: function(c, d) {
        return Number (c) + Number (d);

    },

    sub: function (c, d) {
        return c - d;
    },

    multi: function (c, d) {
        return c * d;
    },

    div: function (c, d) {
        return c / d;
    },

    remain: function (c, d) {
        return c % d;
    },

};
 
console.log(methods[operation](a, b));
