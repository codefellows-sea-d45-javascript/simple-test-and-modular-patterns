'use strict';

var Greet = require('./lib/greet');
var greet = new Greet();

var arg_parse = require('./lib/arg_parse.js');
var nameString = arg_parse.parse(process.argv[2]);

console.log(greet.greet(nameString));
