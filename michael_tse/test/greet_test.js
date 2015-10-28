'use strict';
var expect = require('chai').expect;
var greet = require(__dirname + '/../greet');

describe('the greet function', function() {
  it('should greet someone by name', function() {
    expect(greet('mike')).to.eql('hello mike');
  });

});
