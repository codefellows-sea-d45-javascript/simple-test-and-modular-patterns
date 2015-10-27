#Simple Test and Modular Pattern Homework Submission#
##Matthew Ringel##
##27 October 2015##

greet.js is a module that returns an object with a method called greet which takes one argument, expected as a string.  Calling the method will output 'hello NAME' where NAME is the string passed as an argument.

greetcl.js is the command line utility.  Usage is

'''node greetcl.js [name]'''

where [name] is a string.


The test for the part bonus isn't working.  The argument parser is set up to throw a TypeError is the given argument is not a string.  I tried to set up a test to test for the error using expect(fn).to.throw(TypeError)
but it didn't work.
