'use strict';

var greet = require(__dirname + '/lib/greet').greet;

var name = process.argv[2] || 'whats-your-name?';

console.log(greet(name));
