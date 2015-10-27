'use strict';

//'exports' just shorthand for module.exports
var myThing = exports = module.exports = function(name) {
  return 'hello ' + name;
};
