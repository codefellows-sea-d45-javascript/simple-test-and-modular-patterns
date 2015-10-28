'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet').greet;
var exec = require('child_process').exec;

describe('the greet object', function() {
  it('should greet someone by name', function() {
    expect(greet('test')).to.eql('hello test');
  });
});

describe('greeting command-line arg', function() {
  var greeting = '';

  beforeEach(function() {
    exec('node ' + __dirname + '/../index.js test',
      function(error, stdout, stderr) {
        greeting = stdout;
    });
  });

  it('should greet the third command line arg', function() {
    expect(greet('test')).to.eql(greeting);
  });
});
