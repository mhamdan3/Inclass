var fs = require('fs');

fs.appendFile('', 'I am a Data', function(err){
    if (err){
        return console.error(err);
    }

    console.log('Content Added!');
})

// ../ moves up a level