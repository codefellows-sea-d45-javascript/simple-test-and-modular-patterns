'use strict';

exports.greet = function(name) {
  return 'hello ' + name;
};

process.argv.forEach(function (val, index) {
	if(index == 2) console.log(exports.greet(val));
});