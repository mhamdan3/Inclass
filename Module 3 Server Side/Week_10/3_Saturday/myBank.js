var fs = require('fs');

var append = function (val, task) {
  fs.appendFile('bank.txt', ', ' + val, function (err) {
    if (err) {
      return console.error(err);
    }
  });
};

var actions = {
  total: function () {
    fs.readFile('bank.txt', 'utf8', function (err, data) {
      if (err) {
        return console.error(err);
      }

      var amtsArr = data.split(', ');
      var result = amtsArr.reduce(function (total, v) {
        return total + Number(v);
      }, 0);

      console.log('You have a total of ' + result.toFixed(2));
    });
  },

  deposit: function (val) {
    if (isNaN(val)) {
      return console.log('Invalid value entered');
    }

    append(val);

    console.log('Deposited ' + val + '.');
  },

  withdraw: function (val) {
    if (isNaN(val)) {
      return console.log('Invalid value entered');
    }

    append('-' + val);

    console.log('Withdrew ' + val + '.');
  },

  lotto: function () {
    fs.appendFile('bank.txt', ', -.25', function (err) {
      if (err) {
        return console.error(err);
      }

      if (Math.floor((Math.random() * 10) + 1) === 1) {
        append('2');

        return console.log('Congrats you have wonthe lottery');
      }

      console.log('Sorry, you just lost 25 cents, better luck next time.');
    });
  }
};

var act = actions[process.argv[2]];

if (!act) {
  return console.log('Sorry, that\'s an invalid command!');
}

act(Number(process.argv[3]));
