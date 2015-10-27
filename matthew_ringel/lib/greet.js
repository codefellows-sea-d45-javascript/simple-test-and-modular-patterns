'use strict';

var Greeting = exports = module.exports = function() {
  this.greet = function(name) {
    return 'hello ' + name;
  };
};
