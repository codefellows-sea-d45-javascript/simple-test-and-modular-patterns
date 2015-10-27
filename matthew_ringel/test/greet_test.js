'use strict';

var expect = require('chai').expect;

var greetConstructor = require(__dirname + '/../lib/greet');
var greetModule = new greetConstructor();

describe('the greet function', function testGreet() {
  it('should return hello NAME', function greetExpect() {
    expect(greetModule.greet('NAME')).to.eql('hello NAME');
  });
});
