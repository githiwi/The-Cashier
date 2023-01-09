function cashCounter(price, cash) {
  let cashRegister = [];
  let change = cash - price;
  if (change >= 50 && cash > price) {
    let result = { "50euro": Math.floor(change / 50) };
    cashRegister.push(result);
    change = change % 50;
  }

  if (change >= 20 && cash > price) {
    //let change = cash - price;
    let result = { "20euro": Math.floor(change / 20) };
    cashRegister.push(result);
    change = change % 20;
  }

  if (change >= 10 && cash > price) {
    //let change = cash - price;
    let result = { "10euro": Math.floor(change / 10) };
    cashRegister.push(result);
    change = change % 10;
    // console.log("100", cash);
  }

  if (change >= 5 && cash > price) {
    let result = { "5euro": Math.floor(change / 5) };
    cashRegister.push(result);
    change = change % 5;
  }
  //console.log("last ", change);
  if (change >= 2 && cash > price) {
    let result = { "2euro": Math.floor(change / 2) };
    cashRegister.push(result);
    change = change % 2;
  }
  if (change >= 1 && cash > price) {
    let result = { "5euro": Math.floor(change / 1) };
    cashRegister.push(result);
    change = change % 1;
  }
  if (change >= 0.5 && cash > price) {
    let result = { "50 cent": Math.floor(change / 0.5) };
    cashRegister.push(result);
    change = change % 0.5;
  }
  if (change >= 0.2 && cash > price) {
    let result = { "20 cent": Math.floor(change / 0.2) };
    cashRegister.push(result);
    change = change % 0.2;
  }
  if (change >= 0.1 && cash > price) {
    let result = { "10 cent": Math.floor(change / 0.1) };
    cashRegister.push(result);
    change = change % 0.1;
  }
  if (change >= 0.05 && cash > price) {
    let result = { "5 cent": Math.floor(change / 0.05) };
    cashRegister.push(result);
    change = change % 0.05;
  }
  if (change >= 0.02 && cash > price) {
    let result = { "2 cent": Math.floor(change / 0.02) };
    cashRegister.push(result);
    change = change % 0.02;
  }
  if (change >= 0.01 && cash > price) {
    let result = { "1 cent": Math.floor(change / 0.01) };
    cashRegister.push(result);
    change = change % 0.01;
  }
  return cashRegister;
}
// console.log(cashCounter(5, 10)); //[ '{5 euro : 1}' ]
// console.log(cashCounter(5, 25));
// console.log(cashCounter(10, 20));
console.log(cashCounter(4.5, 20));
//console.log(cashCounter(5, 100));
