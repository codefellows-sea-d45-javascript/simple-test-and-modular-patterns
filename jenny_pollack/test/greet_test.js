'use strict'; 

var expect = require('chai').expect; 
var greet = require(__dirname + '/../lib/greet');

//test that verifies the output of the function
describe('the greet function', function(){
	it('should say hello name, where name is the argument', function(){
		expect(greet('jenny')).to.eql('hello jenny');
	});

});
