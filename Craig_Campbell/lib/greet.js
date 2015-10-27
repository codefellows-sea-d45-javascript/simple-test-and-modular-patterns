'use strict';

var greeting = exports.greet = function greet(time, name) {
  return 'Good ' + time  + ', ' + name + '!';
}



var someTime = process.argv[2];
var someName = process.argv[3];

console.log(greeting (someTime, someName));  // Bonus
