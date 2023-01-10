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

function createCashCounter() {
  return function (price, cash) {
    const cashNotes = [50, 20, 10, 5, 2, 1];
    const cashCoins = [0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

    let cashRegister = [];
    let change = Number(cash - price);
    if (cash < price) {
      return price - cash + " more euro should be paid";
    }
    if (cash == price) {
      return `payment done print the receipt? `;
    }
    if (cashBox === []) {
      return "empty";
    }
    cashNotes.forEach((note) => {
      //   if (cashBox === []) {
      //     console.log("empty");
      //     return;
      //   }
      if (change >= note) {
        cashBox.forEach((item) =>
          item[note] ? (item[note] -= Number(Math.floor(change / note))) : item
        );
        let result = { [`${note} Euro`]: Math.floor(change / note) };
        cashRegister.push(result);
        change = change % note;
      }
    });

    cashCoins.forEach((coins) => {
      if (cashBox === []) {
        return "empty";
      }
      if (change >= coins) {
        cashBox.forEach((item) =>
          item[coins]
            ? (item[coins] -= Number(Math.floor(change / coins)))
            : item
        );
        let result = { [`${coins} cent`]: Math.floor(change / coins) };
        cashRegister.push(result);
        change = change % coins;
      }
    });
    // console.log(cashRegister);
    return cashRegister;
  };
}

const cashCounter = createCashCounter();
console.log(cashCounter(5, 10));
console.log(cashCounter(5, 100));
console.log(cashCounter(3.75, 50));
console.log(cashCounter(4.5, 20));
console.log(cashCounter(15, 10));
console.log(cashCounter(15, 15));
console.log(cashBox);

//console.log(cashRegister.find((c) => (c.note = 50)));
/* const myArr= [{someKey: 3}]

myArr[0].someKey += 1;

console.log(myArr) // returns [{ someKey: 4 }]*/

//console.log(cashBox["50"] - cashRegister[0]);
