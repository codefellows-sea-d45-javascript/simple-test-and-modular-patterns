'use strict';

exports = module.exports = {};

exports.parse = function(arg) {
  if (typeof arg != 'string') {
    throw new TypeError('argument is not a string!');
  }
  else {
    return arg
  }
};
