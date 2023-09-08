/* ES5 Map Callback */
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

const someNumbers = [1,2,3,4,5,6];

/* ES2015 Arrow Functions Shorthand Refactor */
const double = (arr) => arr.map((val) => val * 2);


/* Refactor the following function to use arrow functions */
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

/* Refactored squareAndFindEvens function */
const squareAndFindEvens = numbers => numbers.map((num) => num ** 2).filter( square => square % 2 === 0);

