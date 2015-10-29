'use strict';

exports = module.exports = {};

exports.parse = function(arg) {
  if (typeof arg != 'string') {
    // throw "argument is not a string!";
    throw new TypeError('string!');
    // return arg.toString();
  }
  else {
    return arg;
  }
};
