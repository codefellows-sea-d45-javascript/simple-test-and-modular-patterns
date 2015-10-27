'use strict';

var name = process.argv[2];
var greet = require(__dirname + '/lib/greet');
console.log(greet(name));
