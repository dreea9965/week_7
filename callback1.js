// function square(num) {
//   return num * num;
// }
//
// var squared = square(5);

function square(num, callback){
  callback(num * num);
}

var squared = function squared(result){
  console.log(result);
};

square(4, squared);
