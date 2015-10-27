'use strict';

var greet = require(__dirname + '/lib/greet');
var greet2 = require(__dirname + '/lib/greet2');
var greet3 = require(__dirname + '/lib/greet3');

console.log(greet());
console.log(greet2.greet(process.argv[2]));
