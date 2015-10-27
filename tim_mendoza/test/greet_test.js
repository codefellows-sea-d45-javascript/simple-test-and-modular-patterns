'use strict';

var expect = require('chai').expect;
var childProcess = require('child_process');
var greet = require(__dirname + '/../lib/greet');

describe('the greet object', function() {
  it('should greet someone by name', function(){
    expect(greet.greet('test')).to.eql('hello test');
  });
  it('should greet someone by their name when input as a command line arg', function (){
    expect(childProcess.execSync('node ' + __dirname + '/../lib/greet.js Tim').toString()).to.eql('hello Tim\n');
  });
});