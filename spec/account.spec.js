const Account = require('../src/account');


describe(`Account Tests`, () => {

    it(`Test 1 - default Account value is 0`, () => {
        // Arrange
        const account = new Account();
        const expected = 0;
        // Act
        const actual = account.getBalance();
        // Assert
        expect(actual).toBe(expected);
    });


    it(` Test 2 - Account balance can be changed using setBalance for a credit type`, () => {
        // Arrange
        const account = new Account();
        // Act 
        account.setBalance(50, `credit`);
        const actual = account.getBalance();
        // Assert 
        expect(actual).toBe(50);
    });


    it(` Test 3 - Account balance can be changed using setBalance for a debit type`, () => {
        // Arrange
        const account = new Account();
        account.setBalance(500, `credit`);
        // Act 
        account.setBalance(100, `debit`);
        const actual = account.getBalance();
        // Assert 
        expect(actual).toBe(400);
    });


    it(`Test 4 - listOfTransactions array length is 0`, () => {
        // Arrange
        const account = new Account();
        const expected = 0;
        // Act
        const actual = account.getListOfTransactions().length
        // Assert 
        expect(actual).toBe(expected);
    });


    it(`Test 5 - Test addToListOfTransactions increases the listOfTransactions array length`, () => {
        // Arrange
        const account = new Account();
        const expected = 1;
        let transaction;
        account.getListOfTransactions();
        // Act
        account.addToListOfTransactions(transaction);
        const actual = account.getListOfTransactions().length;
        // Assert 
        expect(actual).toBe(expected);
    });

});

