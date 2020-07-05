const CashRegister = require('./CashRegister');

const cashRegisterOne = CashRegister;
const cashRegisterTwo = CashRegister;

cashRegisterOne.credit(25);
cashRegisterTwo.credit(35);

// Result is 60 instead of 25 because of module system caching provided by Node.js
console.log(cashRegisterOne.total());
