
const Account = require('../src/account');

describe(`Account Tests`, () => {
    //     // Test code for the wallet class goes here
    it(`Test 1 - default Account value is 0`, () => {
        // Arrange
        const account = new Account();
        const expected = 0;
        // Act
        const actual = account.getBalance();
        // Assert
        expect(actual).toBe(expected);
    });




    it(`Test 2 - listOfTransactions array length is 0`, () => {
        // Arrange
        const account = new Account();
        const expected = 0;
        // Act
        const actual = account.listOfTransactions.length
        // Assert 
        expect(actual).toBe(expected);
    })
});




