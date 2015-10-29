'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + "/../lib/greet").greet;

describe('greet a person function', function() {
  it('should return "Hello, undefined!" without a name', function() {
    expect(greet()).to.equal("Hello, " + undefined + "!");
  });
  it('should return "Hello (name)!" with a name', function() {
    expect(greet("Kevin")).to.equal("Hello, Kevin!");
  });
});

//   Could not quite figure out how to implement a check for 
//   command line arguments processing :(
// 
// describe('command line greet utility', function() {
//   it('should process command line arguments', function() {
//     expect()
//   });
// });