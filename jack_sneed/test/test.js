'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function() {
  it('the function should say hello (name)', function() {
    expect(greet('jack')).to.eql('hello jack');
  });
});
