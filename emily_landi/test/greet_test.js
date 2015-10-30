'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function(){
  it('should greet by name', function(){
    //the following will fail - testing for false positive.
    // expect(greet('test')).to.eql('hello emily');
    expect(greet('emily')).to.eql('hello emily');
  });
});
