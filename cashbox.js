let cashBox = [
  { 50: 10 },
  { 20: 0 },
  //   { 10: 10 },
  //   { 5: 25 },
  //   { 2: 25 },
  //   { 1: 25 },
  //   { 0.5: 25 },
  //   { 0.2: 25 },
  //   { 0.1: 25 },
  //   { 0.05: 25 },
  //   { 0.02: 25 },
  //   { 0.01: 25 },
];

//console.log(Object.values(item));
let cashBoxSum = cashBox.reduce(function (accumulator, currentValue) {
  for (key in currentValue) {
    console.log(currentValue[key]);
    return currentValue[key] + accumulator;
  }
}, 0);
console.log(cashBoxSum);

let cashBoxClean = cashBox.reduce(function (accumulator, currentValue) {
  for (key in currentValue) {
    if (currentValue[key] == 0) {
      delete currentValue;
    }
    return currentValue;
  }
});
console.log(cashBoxClean);
// var test = {
//     test1: null,
//     test2: 'somestring',
//     test3: 3,
//   }

//   function clean(obj) {
//     for (var propName in obj) {
//       if (obj[propName] === null || obj[propName] === undefined) {
//         delete obj[propName];
//       }
//     }
//     return obj
//   }

//   console.log(test);
//   console.log(clean(test));

console.log(cashBox);
