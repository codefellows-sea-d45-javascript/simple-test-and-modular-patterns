var expect = require('chai').expect;
var greet = require('../lib/greeting').greet;

describe('Greeting function', function() {
  it('should return string of "hello" plus name', function() {
    expect(greet('Albert')).to.equal('hello Albert');
  });
});
