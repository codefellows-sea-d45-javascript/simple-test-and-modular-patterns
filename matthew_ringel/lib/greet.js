'use strict';

var Greeting = module.exports = exports = function() {
  this.greet = function(name) {
    return 'hello ' + name;
  };
};
