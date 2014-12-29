
$(document).ready(function(){

var fizzbuzz = function(countTo){
  
  for(i=1;i<countTo;i++) {
    if (i%3===0 && i%5===0) {
        $('#fizzbuzz').append("<p>" + "fizz-buzz" + "</p>");
      } else if (i%3===0) {
        $('#fizzbuzz').append("<p>" + "fizz" + "</p>");
      } else if (i%5===0) {
        $('#fizzbuzz').append("<p>" + "buzz" + "</p>");
      } else {
        $('#fizzbuzz').append("<p>" + i + "</p>");
      }
    }
  }

  var userInput = prompt("Please choose a number.");
  var x = +userInput;
  if ((typeOf x === 'number') && (x % 1 === 0)) {
    fizzbuzz(x);
  } else {
    console.log("Please choose a bloody number!!!");
  };

  fizzbuzz(x);

});