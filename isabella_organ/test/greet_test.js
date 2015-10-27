'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function() {
	it('should return hello (name)', function() {
		expect(greet('Tyler')).to.eql('hello Tyler');
	});
});




