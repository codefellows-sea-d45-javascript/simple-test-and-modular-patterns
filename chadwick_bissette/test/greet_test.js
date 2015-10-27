'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('greet function', function() {
  it('should return hello + name', function() {
    expect(greet('chadwick')).eql('hello chadwick');
  });
});
