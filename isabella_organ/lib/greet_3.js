'use strict';

//use constructor
var Greet = exports = module.exports = function() {
  this.greeting = 'hello world';
};

Greet.prototype.greet = function() {
  return this.greeting;
};
