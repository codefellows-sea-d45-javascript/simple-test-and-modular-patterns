'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet').greet;

var name = process.argv[2] || 'name';

describe('the greet object', function() {
  it('should greet someone by name', function() {
    expect(greet('test')).to.eql('hello test');
  });

  it('should greet the third command line arg', function() {
    expect(greet(name)).to.eql('hello ' + name);
  });
});
