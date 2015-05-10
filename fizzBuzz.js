
//for(var i = 1; i <= 100; i++){
//  if( (i%15 === 0) ) { string = "fizz buzz";}
//  else if (i%3 === 0) { string = "fizz";}
//  else if (i%5 === 0) { string = "buzz";}
//  else { string = i; }
//  console.log(string);
//}

for(var i = 1; i <= 100; i++){
  string = '';
  if (i%3 === 0) { string = "fizz";}
  if (i%5 === 0) { string += "buzz";}
  else { string = i; }
  console.log(string);
}

//for(var i = 1; i<=1000; i++){
//  var string = ( (i%3===0) && (i%5===0) ) ? "fizz buzz" : (i % 3 === 0) ? "fizz" : (i%5 === 0) ? "buzz" : i;
//  console.log(string);
//}

