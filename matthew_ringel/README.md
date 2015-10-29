#Simple Test and Modular Pattern Homework Submission#
##Matthew Ringel##
##28 October 2015##

Added package.json and gulp file.

The gulpfile contains two tasks:

gulp jshint will run jshint on all code in the /lib and /test folders.

gulp mocha will run the tests in the greet_test.js file.  I chose not to include the the other test file as that only applied to last assignment's bonus point.

For this weeks bonus point, I put the jshint options into a .jshintrc file at the root level that can me transfered between projects.




###27 October 2015###
greet.js is a module that returns an object with a method called greet which takes one argument, expected as a string.  Calling the method will output 'hello NAME' where NAME is the string passed as an argument.

greetcl.js is the command line utility.  Usage is

```node greetcl.js [name]```

where [name] is a string.


The test for the 2nd part bonus isn't working.  The argument parser is set up to throw a TypeError if the given argument is not a string.  I tried to set up a test to test for the error using expect(fn).to.throw(TypeError)
but it didn't work.
