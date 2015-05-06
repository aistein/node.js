// print process.argv

var open = require('open');

process.argv.forEach(function (val, index, array) {
     if (val == 1)  {
        open('http://www.google.com');
        console.log("have fun exploring google!");
     }
});
