'use strict';


var expect = require('chai').expect;
var greeting = require ('../greet');


describe ('the greet function' , function(){
	it("should return hello Iryna", function() {
		expect(greeting.greetme("Iryna")).to.eql('hello Iryna');
	});
	it("should return hello Maksym", function () {
		expect(greeting.greetme("Maksym")).to.eql("hello Maksym")
	});
});

