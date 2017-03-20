function square(num, callback) {
  callback(num * num);
}

function squareRoot(num, callback) {
  callback(Math.sqrt(num));
}

var x = 4;
var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;

// var answer = squareRoot(sum);
// console.log('The answer is: ' + answer);

square(x, function(x2) {
  square(y, function(y2) {
    var sum = x2 + y2;
    console.log(sum);

    squareRoot(sum, function(answer){
      console.log('The answer is ' + answer);
    });
  });

});
