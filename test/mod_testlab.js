'use strict';

var expect = require('chai').expect;

var greet1 = require(__dirname + '/../lib/modlab.js');

describe('the modular and simple test code - greet object', function(){
  it('should greet someone by name', function() {
    expect(greet1.greet('Tina Sharma')).to.eql('hello Tina Sharma');
  });
});
