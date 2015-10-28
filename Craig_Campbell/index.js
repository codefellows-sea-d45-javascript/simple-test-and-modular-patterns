'use strict';

var Greet = require(__dirname + '/lib/timegreet.js');

var greetNow = new Greet();

var name = process.argv[2] || "whoever you are";

console.log(greetNow.greeting(greetNow.timeGreet(), name ));
