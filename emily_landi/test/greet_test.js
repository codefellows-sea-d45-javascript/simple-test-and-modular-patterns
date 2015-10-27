'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');
var greetAgain = require(__dirname + '/../lib/greet_again');

describe('the greet function', function(){
  it('should greet by name', function(){
    //the following will fail - testing for false positive.
    //expect(greet('test')).to.eql('hello emily');
    expect(greet('emily')).to.eql('hello emily');
  });
});

describe('the greet object', function(){
  it('should also greet by name', function(){
    //the following will fail - testing for false positive.
    //expect(greetAgain.greet('test')).to.eql('hello emily');
    expect(greetAgain.greet('emily')).to.eql('hello emily');
  });
});
