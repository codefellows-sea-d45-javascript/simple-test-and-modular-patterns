'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function() {
  it('should output hello followed by the string which is passed to it', function() {
    expect(greet.greet('walter')).to.eql('hello walter');
  });

});
