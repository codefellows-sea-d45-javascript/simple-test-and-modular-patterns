'use strict';

var expect = require('chai').expect;

var greet = require(__dirname + '/../lib/greet.js');

describe('greet.greet()', function(){
  var time = 'evening';
  var name = 'Fred';
  it('should greet someone by name, and have the correct greeting for a time of day', function(){
    expect(greet.greet(time, name)).to.eql('Good evening, Fred!')
  });
});



