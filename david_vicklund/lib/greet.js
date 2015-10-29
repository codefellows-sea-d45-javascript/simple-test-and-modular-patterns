var exports = module.exports = {};

var greet = function(name) {
  return "Hello, " + name + "!";
};

exports.greet = greet;

// if this file is opened using node with an extra argument,
// console.log that argument as a greeting
if(process.argv.length > 2) {
  var comLineName = process.argv[2];
  console.log(greet(comLineName));
}
