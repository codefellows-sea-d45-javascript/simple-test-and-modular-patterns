'use strict';

// note : below shows long verison...
// var chai = require('chai');
// var expect = chai.expect;

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function() {
	it('should greet someone by name', function() {
		expect(greet('Ansoo')).to.eql('Hello Ansoo');
	});
});
