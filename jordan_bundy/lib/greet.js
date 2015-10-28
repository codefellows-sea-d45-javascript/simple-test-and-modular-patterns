'use strict';

var exports = module.exports = {};

var greet = function greet(name) {
  
  // Not pretty, but a quick and dirty way to use process.argv
  var name = name || process.argv;
  // If the process.argv was used, it should be an object, needs to be processed
  if(typeof name === "object") {
    name = name[2];
  };

  return 'hello ' + name;
};

exports.greet = greet;

// If process exists and has a valid argument, output result to screen
if(process.argv[2]){
  console.log(greet());
};

