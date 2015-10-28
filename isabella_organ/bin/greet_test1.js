var expect = require('chai').expect;
var greet = require(__dirname + '/../bin/greet');

describe('greet bin', function() {
	before(function() {
			this.backup = process.argv;
			process.argv ['node', 'myfile', 'test name'];
	});
});