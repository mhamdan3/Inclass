var stuffINeed = require("./ess.js");

// this will print everything in exports
console.log("-----------------------");
console.log("All THE STUFF I NEED");
console.log(stuffINeed);
console.log("-----------------------");

// These will print correctly because we imported them
console.log("Essentials");
console.log(stuffINeed.essentials);
console.log("-----------------------");
console.log("Nice to Haves");
console.log(stuffINeed.niceToHaves);

// This won't print anything because it wasn't exported in ess.js
console.log("-----------------------");
console.log("Nonessentails");
console.log(stuffINeed.nonessentials);