var fs = require('fs');

fs.readFile('movies.txt', 'utf8', function (err, data){
    if (err) {
        return console.error(err);
    }

console.log(data);

console.log (data.split(','));

});