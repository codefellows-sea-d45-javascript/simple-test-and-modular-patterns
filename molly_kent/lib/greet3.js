'use strict';

var greet = exports = module.exports = function() {
  return 'insert evil laugh here';
};

console.log(greet());
// this will fire off when it gets required, so the console.log shows up in Node

// the function also gets stored in the variable greet so it can be modified later

// HANDY for constructor functions and adding methods on the prototype down the line
