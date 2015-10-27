'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function() {
  it('should greet someone by hello followed by their name', function() {
    expect(greet('test')).to.eql('hello test');
  });
});

describe('process.argv', function() {
  it('contains an element at index 2 with an argument passed in from the command line. it will be undefined if nothing is passed in', function() {
    expect(process.argv[2]).to.eql(undefined);
  });
});
