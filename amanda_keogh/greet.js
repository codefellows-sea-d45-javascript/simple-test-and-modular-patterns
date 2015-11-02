// Amanda Keogh
// Code Fellows - sea-d45-javascript
// October 27, 2015
// Command line utility utilizing greeting.js. Allows the user to pass an argum-
// ent via the command line.


var greet = require(__dirname + "/lib/greeting");

console.log(greet(process.argv[2]));


