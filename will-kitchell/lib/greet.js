"use strict";

function greet(name) { //create a greet function with an undefined name parameter
  return 'hello ' + name;
};

console.log(greet(process.argv[2])); //set the name parameter in the greet function equal to process.argv[2]
module.exports = greet; //export the new greet value


