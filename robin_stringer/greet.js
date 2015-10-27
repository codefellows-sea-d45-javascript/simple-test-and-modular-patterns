'use strict';

var Greet = exports = module.exports = function(name) {
  this.greeting = 'hello ' + name;
};

Greet.prototype.greet = function(){
  return this.greeting;
};
