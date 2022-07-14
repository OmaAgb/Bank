
// Test suites
// describe - 2 arguments
// - 1st - string to give suite a name
// - 2nd - function to have all of the suite test code

// describe(`Wallet Tests - Simple`, () => {
//     // Test code for the wallet class goes here

//     // Tests
//     // it - 2 arguments
//     // - 1st - string to give the test a name
//     // - 2nd - function to have all of the individual test code
//     it(`Adds 10 to balance`, () => {
//         // Arrange
//         const wallet = new Wallet();
//         const expected = 110;
//         // Act/Assert
//         const actual = wallet.add(10);
//         // expect - 1 argument and then a chained matcher
//         expect(actual).toBe(expected);
//     });

const Account = require('../src/account');

describe(`Account Tests`, () => {
    //     // Test code for the wallet class goes here
    it(`default Account value is 0`, () => {
        // Arrange
        const Account = new Account();
        const balance = balance
        const expected = 0;
        // Act
        const actual = balance.equals(0);
        //Assert
        expect(actual).toBe(expected);
    });
});
