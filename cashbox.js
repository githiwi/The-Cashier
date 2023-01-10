let cashBox = [
  { 50: 10 },
  { 20: 10 },
  { 10: 10 },
  { 5: 25 },
  { 2: 25 },
  { 1: 25 },
  { 0.5: 25 },
  { 0.2: 25 },
  { 0.1: 25 },
  { 0.05: 25 },
  { 0.02: 25 },
  { 0.01: 25 },
];

//console.log(Object.values(item));
let cashBoxSum = cashBox.reduce(function (accumulator, currentValue) {
  for (key in currentValue) {
    return currentValue[key] + accumulator;
  }
}, 0);
console.log(cashBoxSum);
