'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');
// Create a dummy process to test the command line capability
var process = {argv: ['node', 'greet.js', 'some name']};

describe('the greet function', function() {
  it('should return hello Jordan', function() {
    expect(greet.greet('Jordan')).to.eql('hello Jordan');
  });

  it('should process the argument and return hello some name', function() {
    expect(greet.greet(process.argv)).to.eql('hello some name');
  });
});

