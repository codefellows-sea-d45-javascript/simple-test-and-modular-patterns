// Amanda Keogh
// Code Fellows - sea-d45-javascript
// October 27, 2015
// Command line utility utilizing greeting.js. Allows the user to pass an argum-
// ent via the command line.

'use strict'
var greet = require(__dirname + "/greeting");

console.log(greet(process.argv[2]));


