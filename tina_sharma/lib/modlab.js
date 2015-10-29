'use strict';

var greeting = exports.greet = function(name) {
  console.log(name);
  return 'hello ' + name;
};

//the following 2 statements are to run node test
//I put this in later, this is Craig_Campbell's code. Thanks!
var someName = process.argv[2];
console.log(greeting(someName));
