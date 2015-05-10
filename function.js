var myFunction = function() { console.log("holy shit."); }
var doFunction = function(f) { f(); }

doFunction(myFunction);

myFunction = function() { alert('this is an alert'); }

doFunction(myFunction);
