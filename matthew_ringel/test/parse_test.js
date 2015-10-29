'use strict';

var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

var arg_parse = require('../lib/arg_parse.js');

describe('the parse function', function testParse() {
  it('should return a string', function stringExpect() {
    expect(arg_parse.parse('NAME')).to.eql('NAME');
  });
  it('should throw an error', function errorExpect() {
    // expect(arg_parse.parse(0)).to.throw(TypeError);
    assert.throws(arg_parse.parse(0), TypeError, 'string!')
  });
});
