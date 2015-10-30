'use strict';

exports.greet = function(name) {
  return 'hello ' + name;
};

if (process.argv.length > 2) {
  console.log(exports.greet(process.argv[2]));
};
