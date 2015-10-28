'use strict';

var Greet = module.exports = exports = function (){};

Greet.prototype.timeGreet = function(today) {
    var now = today || new Date();
    if (now.getHours() < 12) return 'morning';
    if (now.getHours() > 12  && now.getHours() < 16) return 'afternoon';
    if (now.getHours() > 16) return 'evening';

};

Greet.prototype.greeting = function(time, name){
  return "Good " + time + ", " + name + "!";
};

// var mornin = new Greet()

// console.log(mornin.greeting(mornin.timeGreet(), "Paul"))
