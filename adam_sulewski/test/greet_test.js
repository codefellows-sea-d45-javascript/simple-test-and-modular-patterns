'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet').greet;
var exec = require('child_process').exec;

describe('the greet object', function() {
  it('should greet someone by name', function() {
    expect(greet('test')).to.eql('hello test');
  });
});

describe('test command-line input', function() {

  // Adding test from class for practice
  before(function() {
    this.backup = process.argv[2];
    process.argv = ['node', 'index.js', 'test'];
  });

  after(function() {
    process.argv = this.backup;
  });

  it('should read from args', function() {
    expect(greet('test')).to.eql(greet(process.argv[2]));
  });
});
