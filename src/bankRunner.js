const Account = require('./account');
const Transaction = require('./transaction');
const Statement = require('./statement');

const account = Account();

const transaction1 = new Transaction(`10/01/2012`, 1000, `credit`);
const transaction2 = new Transaction(`13/01/2012`, 2000, `credit`);
const transaction3 = new Transaction(`14/01/2012`, 500, `debit`);

account.makeTransaction(transaction1);
account.makeTransaction(transaction2);
account.makeTransaction(transaction3);

