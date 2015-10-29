'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function(){
  it('should return hello and the inputed name', function() {
    expect(greet('spencer')).to.equal('hello ' + 'spencer');
  });
});
