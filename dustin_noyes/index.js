'use strict';

//  ./ = indicator of a local file, current runtime environment
//  better to use __dirname, since the ./ is fragile due to possible moving of file; __dirname is a placeholder for dir that contains index.js

/*

down vote
accepted

The gist

In Node.js, __dirname is always the directory in which the currently executing script resides (see this). In other words, you typed __dirname into one of your script files and value would be that file's directory.

By contrast, . gives you the directory from which you ran the node command in your terminal window (i.e. your working directory). The exception is when you use . with require(), in which case it acts like __dirname.
*/


var greet = require(__dirname + '/lib/greet');
console.log(greet("dustin"));
