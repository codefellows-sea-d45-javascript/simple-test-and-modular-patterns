'use strict';

var Greet = require('./lib/greet');
var greet = new Greet();

console.log(greet.greet(process.argv[2]));
