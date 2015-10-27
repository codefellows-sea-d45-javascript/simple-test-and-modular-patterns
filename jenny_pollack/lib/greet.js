'use strict';

var input = process.argv[2];

var greet = module.exports = function(name) {
  return 'hello ' + name;
};

if(input){
	console.log(greet(input)); 
}
