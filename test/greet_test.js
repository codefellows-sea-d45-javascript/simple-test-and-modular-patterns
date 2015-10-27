'use strict';

var expect = require('chai').expect;
var greetings = require(__dirname + '/../lib/greet');

describe('the greet function', function() {
  it('should greet someone by name', function() {
    var name = 'Rick';
    expect(greetings(name)).to.eql('Hello, ' + name + '.');
  });
});
