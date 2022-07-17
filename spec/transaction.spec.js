const Transaction = require("../src/transaction");
const Account = require('../src/account');


describe(`Transaction Tests`, () => {

    it(`Test 1 - different transactions can be found in listOfTransactions`, () => {
        // Arrange
        const transaction1 = new Transaction(`10/01/2012`, 1000, `credit`, 1000);
        const transaction2 = new Transaction(`13/01/2012`, 2000, `credit`, 3000);
        const transaction3 = new Transaction(`14/01/2012`, 500, `debit`, 2500);
        const account = new Account();
        const expected = true;
        // Act
        account.addToListOfTransactions(transaction1, transaction2, transaction3)
        const actual = account.listOfTransactions.includes(transaction1, transaction2, transaction3);
        // Assert
        expect(actual).toEqual(expected);
    });
})
