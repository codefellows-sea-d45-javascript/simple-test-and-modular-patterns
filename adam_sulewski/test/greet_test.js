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
  var greeting = '';

  // here's the new async test
  // tests that command line args are processed
  beforeEach(function(done) {
    exec('node ' + __dirname + '/../index.js test',
      function(error, stdout, stderr) {
        if (error) throw error;

        greeting = stdout;
        done();
    });
  });

  it('should equal greet output plus linebreak', function() {
    expect(greet('test') + '\n').to.eql(greeting);
  });
});
