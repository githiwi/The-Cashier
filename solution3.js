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

function createCashCounter(cashBox) {
  return function (price, cash) {
    const cashNotes = [50, 20, 10, 5, 2, 1];
    const cashCoins = [0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

    let cashRegister = [];
    let change = cash - price;

    cashNotes.forEach((note) => {
      if (change >= note && cash > price) {
        let result = { [`${note} Euro`]: Math.floor(change / note) };
        cashRegister.push(result);
        change = change % note;
      }
    });

    cashCoins.forEach((coins) => {
      if (change >= coins && cash > price) {
        let result = { [`${coins} cent`]: Math.floor(change / coins) };
        cashRegister.push(result);
        change = change % coins;
      }
    });
    // console.log(cashRegister);
    return cashRegister;
  };
}

// console.log(cashCounter(5, 10)); //[ '{5 euro : 1}' ]
// console.log(cashCounter(5, 25));
// console.log(cashCounter(10, 20));
// console.log(cashCounter(4.5, 20));

//console.log(cashBox);
const cashCounter = createCashCounter();
console.log(cashCounter(5, 10));
console.log(cashCounter(5, 100));
console.log(cashCounter(3.75, 50));
console.log(cashCounter(4.5, 20));
