
$(document).ready(function(){

var fizzbuzz = function(countUpTo){
  
  for(i=1;i<countUpTo;i++){
  if (i%3===0) {
    if (i%5===0) {
      $('#fizzbuzz').append("<p>" + "fizz-buzz" + "</p>");
    }
    else {
      $('#fizzbuzz').append("<p>" + "fizz" + "</p>");
    }
}
  
  else if (i%5==0){
    $('#fizzbuzz').append("<p>" + "buzz" + "</p>");
  }
    else{
      $('#fizzbuzz').append("<p>" + i + "</p>");
    }
  };
}

  var stringInput = prompt("Please choose a number.");
  var x = +stringInput;
  if ((typeOf x === 'number') && (x % 1 === 0)) {
    console.log('Nice!');
    fizzbuzz(x);
  } else {
    console.log('Please choose a bloody number!!!');
  };
  fizzbuzz(x);


});