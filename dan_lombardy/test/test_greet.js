"use strict";

var expect = require('chai').expect;
var greeter =require(__dirname + '/../lib/greet');

describe('a function that greets to the console', function(){

  it('should return "hello" and value of name variable', function(){
    var test = "Dan";
    expect(greeter.greet(test)).to.equal("hello Dan");
  });
});
