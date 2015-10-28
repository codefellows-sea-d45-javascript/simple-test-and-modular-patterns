'use strict';

var greet = require(__dirname + '/lib/greeting').greet;

if (process.argv[2] !== -1) { // check if string arg exists at position 2
  console.log(greet(process.argv[2]));
}
else {
  console.log(greet());
}
