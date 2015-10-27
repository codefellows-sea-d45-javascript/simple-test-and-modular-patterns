'use strict';

var expect = require('chai').expect;

var greet = require(__dirname + '/../lib/greet.js');
var Timegreet = require(__dirname + '/../lib/timegreet.js');

describe('greet.greet()', function(){
  var time = 'evening';
  var name = 'Fred' ;
  it('should greet someone by name, and have the correct greeting for a time of day', function(){
    expect(greet.greet(time, name)).to.eql('Good evening, Fred!')
  });
});



describe('timegreet.timegreet()', function(){
  var mornin = new Timegreet();
  var rightnow = new Date(2015, 09, 27, 22)
  it('should greet someone by name, and have the correct greeting for the current time of day', function(){
    expect(mornin.timeGreet(rightnow)).to.eql('afternoon')
  });
});
