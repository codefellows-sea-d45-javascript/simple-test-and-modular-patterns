'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function() {
  it('should greet someone by name', function() {
    expect(greet.greeting('test')).to.eql('hello test');
  });
});
