var exec = require('child_process'). exec;

var greeting = '';

exec('node ' + __dirname + '/../index.js test',
  function(error, stdout, stderr) {
    greeting = stdout;
    console.log(greeting);
});
