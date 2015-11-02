// Amanda Keogh
// Code Fellows - sea-d45-javascript
// October 27, 2015
// Test for greeting.js - checks that exported function successfully takes
// arguments and returns correct string.

'use strict';

var expect = require('chai').expect;
var greeting = require(__dirname + "/../lib/greeting");
var greet = require(__dirname + "/../greet");

describe('the greeting function', function() {
  it('should greet the user by name', function () {
    expect(greeting("Amanda!")).to.eql("hello Amanda!");
  });
});


