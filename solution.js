let cashBox = [
  { 50: 10 },
  { 20: 10 },
  { 10: 0 },
  { 5: 4 },
  { 2: 0 },
  { 1: 0 },
  { 0.5: 25 },
  { 0.2: 5 },
  { 0.1: 25 },
  { 0.05: 25 },
  { 0.02: 25 },
  { 0.01: 25 },
];

/**
 * this function returns the total amount of
 * notes and coins available in cashbox
 * @param {the cashier cashBox} cashBox
 * @returns
 */
function checkCashBox(cashBox) {
  let cashBoxTotal = cashBox.reduce(function (accumulator, currentValue) {
    for (key in currentValue) {
      return currentValue[key] * key + accumulator;
    }
  }, 0);

  return cashBoxTotal;
}

function createCashCounter() {
  return function (price, paidCash) {
    const cashNotes = [50, 20, 10, 5, 2, 1];
    const cashCoins = [0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

    let cashRegister = [];
    let change = Number(paidCash - price);

    if (paidCash == price) {
      return "Payment done print the receipt?";
    }
    if (paidCash < price) {
      return price - paidCash + " more euro should be paid";
    }
    if (checkCashBox(cashBox) < change) {
      return "We don't have enough in the cash box";
    }

    if (checkCashBox(cashBox) == 0) {
      return "Empty cash box";
    }

    cashNotes.forEach((note) => {
      if (change >= note) {
        // to get a cashBox object by note
        const cashObject = cashBox.find(
          (cashBoxObj) => Object.keys(cashBoxObj) == note
        );

        let quotientNote = Number(Math.floor(change / note));
        if (cashObject[note] < 1 && cashObject[note] - quotientNote < 0) {
          return;
        }

        cashBox.forEach((item) =>
          item[note] ? (item[note] -= quotientNote) : item
        );

        let result = { [`${note} Euro`]: quotientNote };
        cashRegister.push(result);
        change = change % note;
      }
    });

    cashCoins.forEach((coin) => {
      let quotientCoin = Number(Math.floor(change / coin));
      if (change >= coin) {
        // to get a cashBox object by coin
        const coinObject = cashBox.find(
          (cashBoxObj) => Object.keys(cashBoxObj) == coin
        );
        if (coinObject[coin] < 1 && coinObject[coin] - quotientCoin < 0) {
          return; //when note 0  return
        }
        //update cashbox whenever their is a change
        cashBox.forEach((item) =>
          item[coin] ? (item[coin] -= quotientCoin) : item
        );

        let result = { [`${coin} cent`]: quotientCoin };
        cashRegister.push(result);
        change = change % coin;
      }
    });

    return cashRegister;
  };
}

const cashCounter = createCashCounter(); //function expression
console.log(cashCounter(5, 100)); //[ { '50 Euro': 1 }, { '20 Euro': 2 }, { '5 Euro': 1 } ]
console.log(cashCounter(22, 23));
console.log(cashCounter(4.5, 5));
console.log(cashCounter(350, 400));

console.log(cashCounter(15, 10));
console.log(cashCounter(15, 15));
console.log(cashCounter(15, 100));
console.log(cashCounter(400, 400));
console.log(cashCounter(90, 100));
