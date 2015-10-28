'use strict';

var greeting = require(__dirname + '/lib/greet');

console.log(greeting.greet(process.argv[2]));
