'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function(){
  it('should greet by name', function(){
    expect(greet('emily')).to.eql('hello emily');
  });
});
