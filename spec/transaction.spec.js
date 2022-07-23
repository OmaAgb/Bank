const Transaction = require("../src/transaction");


describe(`Transaction Tests`, () => {

    it(`Test 1 - default transactionBalance value is 0`, () => {
        // Arrange
        const transaction = new Transaction();
        const expected = 0;
        // Act
        const actual = transaction.getTransactionBalance();
        // Assert
        expect(actual).toEqual(expected);
    });


    it(`Test 2 - transactionBalance can be changed using setTransactionBalance`, () => {
        // Arrange
        const transaction = new Transaction();
        transaction.getTransactionBalance();
        const expected = transaction.getAmount();
        // Act
        const actual = transaction.setTransactionBalance(300);
        // Assert
        expect(actual).toEqual(expected);
    });


    it(`Test 3 - test that the date and type of transaction can be accessed`, () => {
        // Arrange
        const transaction = new Transaction(`25/12/2022`, 500, `credit`);

        const expected = true
        // Act
        const actual = transaction.getType().includes(`credit`);
        // Assert
        expect(expected).toBe(actual);
    });

});