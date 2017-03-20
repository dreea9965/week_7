var x = 4;
var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;


function square(num, callback){
  callback(num * num);
}

// var squared = function squared(result){
//   console.log(result);
// };

// square(4, squared);


square(x, function(x2) {
  square(y, function(y2) {
    var sum = x2 + y2;
    console.log(sum);
  });

});
