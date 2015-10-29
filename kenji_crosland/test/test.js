'use strict';

var expect = require('chai').expect;
var greeting = require(__dirname + '/../lib/greet');

describe('the greet function', function(){
  it('should return hello Zaphod when "Zaphod" is passed to the greet function', function(){
    expect(greeting.greet("Zaphod")).to.eql('hello Zaphod');
  });

  it('should process the arguments input in the console', function(){
    expect(greeting.greet(process.argv)).to.eql('hello ' + process.argv);
  });
});
