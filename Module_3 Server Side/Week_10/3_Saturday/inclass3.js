var fs = require('fs');

fs.writeFile('best_things_ever.txt', 'lazy boy recliner, massage, meditation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep on my lap', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('best_things_ever.txt was uploaded');
});

console.log('Do a thing!');

