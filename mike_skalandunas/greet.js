'use strict';

var args = process.argv.slice(2);
console.log('Hello ' + args.join(' ') + '!');

// How it works

// The variable used to access arguments passed through the command
// line is 'process.argv'.  The .slice(2) method is called because
// process.argv is an array, and the first 2 indexes are node and
// the file path of the greet.js file.

// Source: http://blog.modulus.io/nodejs-scripts

// Below are the console.logs I used to learn a little more.

// console.log(args);
// console.log(process.argv);
// console.log(process.argv[1].toString());
