var fs = require('fs');

fs.writeFile('movies.txt', 'Inception, Die Hard', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('movies.txt was uploaded');
});

console.log('Do a thing!');