function cashCounter(price, cash) {
  let cashRegister = [];
  if (cash > 50 && cash > price) {
    let change = cash - price;
    let result = { "50euro": Math.floor(change / 50) };
    cashRegister.push(result);
    cash = change % 50;
    // console.log("why1", cash);
    // console.log("why1", change);
  }

  if (cash > 20 && cash > price) {
    //let change = cash - price;
    let result = { "20euro": Math.floor(cash / 20) };
    cashRegister.push(result);
    cash = cash % 20;
    //console.log("why", cash);
  }
  if (cash > 10 && cash > price) {
    //let change = cash - price;
    let result = { "10euro": Math.floor(cash / 10) };
    cashRegister.push(result);
    cash = cash % 10;
  }

  if (cash >= 5 && cash >= price) {
    //let change = cash - price;

    let result = { "5euro": Math.floor(cash / 5) };
    cashRegister.push(result);
    cash = cash % 5;
  }
  return cashRegister;
}
// console.log(cashCounter(5, 10)); //[ '{5 euro : 1}' ]
// console.log(cashCounter(5, 25));
// console.log(cashCounter(10, 20));
//console.log(cashCounter(4.5, 20));
console.log(cashCounter(5, 100));
