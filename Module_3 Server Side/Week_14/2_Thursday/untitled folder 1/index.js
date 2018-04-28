var express = require('express');
var port = process.env.PORT || 5000;
var app = express();
var router = express.Router();

router.get('/:operator/:firstNum/:secondNum', function (req, res) {
  var methods = {
    add: function (a, b) {
      return a + b;
    },

    subtract: function (a, b) {
      return a - b;
    },

    multiply: function (a, b) {
      return a * b;
    },

    divide: function (a, b) {
      return a / b;
    }
  };
  var op = methods[req.params.operator];

  if (!op) {
    return res.send('Sorry, invalid operation!');
  }

  var result = String(op(Number(req.params.firstNum), Number(req.params.secondNum)));

  return res.send(result);
});

app.use(router);

app.listen(port, function () {
  console.log('Running!');
});