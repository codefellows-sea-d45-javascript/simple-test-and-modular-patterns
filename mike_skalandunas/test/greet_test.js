'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('a simple greeting function', function() {
  it('should return hello <name>', function() {
    expect(greet('Jim')).to.eql('hello Jim');
  })
})

// Failing test

// describe('a simple greeting function', function() {
//   it('should return hello <name>', function() {
//     expect(greet('Jim')).to.eql('DSIOFJSIDOF');
//   })
// })
