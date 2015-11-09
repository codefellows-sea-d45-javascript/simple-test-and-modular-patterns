'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function() {
  it('should greet someone by hello followed by their name', function() {
    expect(greet('test')).to.eql('hello test');
  });
});
