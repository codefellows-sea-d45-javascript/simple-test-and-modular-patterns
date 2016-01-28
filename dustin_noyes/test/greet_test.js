'use strict';

//gets chai's expect function
var expect = require('chai').expect;

//gets greet function
var greet = require(__dirname + '/../lib/greet');

//
describe('the greeting object', function() {
  it('should greet someone by name', function() {
    expect(greet.myObject('dustin')).to.eql('hello dustin');
  });
});


