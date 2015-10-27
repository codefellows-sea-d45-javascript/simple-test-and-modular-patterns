"use strict";

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet'); //must go back a directory, go into the lib directory, run greet.js
var name = process.argv[2];

describe('the greet function', function(){
  it('should greet the user by name', function(){
    expect(greet(process.argv[2])).to.eql('hello ' + process.argv[2]);
  });
});

