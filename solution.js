// function createCashCounter(cashBox, cashCounter){

// }

// helps a cashier give adequate change to customers
// function cashCounter(price, cash) {
//   let changeNotes = Math.floor(cash - price);
//   let cashRegister = [];
//   if (cash % 50 == 0 && cash > 50) {
//     let result = { "50 euro": 1 };
//     cashRegister.push(result);
//     //cash = cash - 50;
//     cash = cashCounter(price, cash - 50);
//     //what if i call cashCounter(price, cash-50)
//   }
//   if (cash % 20 == 0 && cash > 20) {
//     let result = { "20 euro": changeNotes / 20 };
//     cashRegister.push(result);
//     // cash = cash - 20;
//     cash = cashCounter(price, cash - 20);
//   }
//   if (cash % 10 == 0 && cash > 10) {
//     let result = { "10 euro": changeNotes / 10 };
//     cashRegister.push(result);
//     // cash = cash - 10;
//     cash = cashCounter(price, cash - 10);
//   }
//   if (cash % 5 == 0 && cash > 5) {
//     let result = { "5 euro": changeNotes / 5 };
//     cashRegister.push(result);
//     // cash = cash - 5;
//     cash = cashCounter(price, cash - 5);
//   }
//   return cashRegister;
// }

function cashCounter(price, cash) {
  let cashRegister = [];
  if (cash > 50 && cash > price) {
    let change = cash - price;
    let result = { "50euro": Math.floor(change / 50) };
    cashRegister.push(result);
    cash = change % 50;
  }

  if (cash > 20 && cash > price) {
    let change = cash - price;
    let result = { "20euro": Math.floor(change / 20) };
    cashRegister.push(result);
    cash = change % 20;
  }
  if (cash > 10 && cash > price) {
    console.log("why", cash);
    let change = cash - price;
    let result = { "10euro": Math.floor(change / 10) };
    cashRegister.push(result);
    cash = change % 10;
  }

  if (cash >= 5 && cash >= price) {
    let change = cash - price;

    let result = { "5euro": Math.floor(change / 5) };
    cashRegister.push(result);
    cash = change % 5;
  }
  return cashRegister;
}
// console.log(cashCounter(5, 10)); //[ '{5 euro : 1}' ]
// console.log(cashCounter(5, 25));
// console.log(cashCounter(10, 20));
//console.log(cashCounter(4.5, 20));
console.log(cashCounter(5, 100));
