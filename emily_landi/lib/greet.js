'use strict';

module.exports = function(name) {
  console.log('hello ' + name);
  return 'hello ' + name;
};

//BONUS - this is incorrect
// var input = process.argv[2];
// console.log("input: " + input);

// var greet = module.exports = function(name) {
//   return 'hello ' + name;
// };

// greet(input);
// console.log("output of greet(input): " + greet(input));
