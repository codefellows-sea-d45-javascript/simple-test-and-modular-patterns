'use strict';

var expect = require('chai').expect;

var arg_parse = require('../lib/arg_parse.js');

describe('the parse function', function testParse() {
  it('should return a string', function stringExpect() {
    expect(arg_parse.parse('NAME')).to.eql('NAME');
  });
  it('should throw an error', function errorExpect() {
    expect(arg_parse.parse(0)).to.throw(TypeError);
  });
});
