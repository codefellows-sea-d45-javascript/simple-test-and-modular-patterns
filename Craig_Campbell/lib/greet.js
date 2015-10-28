'use strict';

var greeting = exports.greet = function greet(time, name) {
  return 'Good ' + time  + ', ' + name + '!';
};



var someTime = process.argv[2] || process.env.ATIME || "current time of day";
var someName = process.argv[3] || process.env.ANAME || "whoever you are";

console.log(greeting (someTime, someName));  // Bonus
