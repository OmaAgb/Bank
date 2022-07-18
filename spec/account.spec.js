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


    it(` Test 2 - Account balance can be changed using setBalance`, () => {
        // Arrange
        const account = new Account();
        const expected = 50;
        // Act 
        account.setBalance(expected)
        const actual = account.getBalance();
        // Assert 
        expect(actual).toBe(expected);
    });


    it(`Test 3 - listOfTransactions array length is 0`, () => {
        // Arrange
        const account = new Account();
        const expected = 0;
        // Act
        const actual = account.listOfTransactions.length
        // Assert 
        expect(actual).toBe(expected);
    });


    it(`Test 4 - Test addToListOfTransactions increases the listOfTransactions array length`, () => {
        // Arrange
        const account = new Account();
        const expected = 1;
        let transaction;
        // Act
        account.addToListOfTransactions(transaction);
        const actual = account.listOfTransactions.length;
        // Assert 
        expect(actual).toBe(expected);
    });

    it(`Test 5`, () => {
        // Arrange
        const account = new Account();
        let amount = 100;
        let expected = 50;
        let newExpected = 150
        // Act
        account.setBalance(expected);
        const actual = amount += expected
        // Assert
        expect(actual).toBe(newExpected)
    });
// look for more sophisticated way to do this 
});


