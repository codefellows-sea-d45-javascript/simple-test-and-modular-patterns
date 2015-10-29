'use strict';

var expect = require('chai').expect;
var greeting = require(__dirname + '/../lib/greet');

describe('the greet function', function(){
  it('should return hello and name', function(){
    expect(greeting.greet('Dave')).to.eql('hello Dave');
  });
});
