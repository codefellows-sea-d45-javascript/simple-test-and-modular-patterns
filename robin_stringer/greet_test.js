'use strict';

var expect = require('chai').expect;
var Greet = require(__dirname + '/../lib/greet');

var greet = new Greet('Dave');
describe('the greet function', function(){
  it('should return hello', function(){
    expect(greet.greet()).to.eql('hello ' + name);
  });
});
