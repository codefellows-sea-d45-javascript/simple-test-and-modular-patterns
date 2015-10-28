'use strict';

var Greet = require(__dirname + '/lib/timegreet.js');

var greetNow = new Greet();

console.log(greetNow.greeting(greetNow.timeGreet(), "Craig"));
