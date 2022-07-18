const Statement = require('../src/statement');
//https://developer.mozilla.org/en-US/docs/Web/API/console/table

describe(`Statement Tests`, () => {

    it(`Test 1 - statementList array length is 0`, () => {
        // Arrange
        const statement = new Statement();
        const expected = 0;
        // Act
        const actual = statement.statementList.length
        // Assert 
        expect(actual).toBe(expected);
    });


    it(`Test 2 - addToStatement increases statementList length`, () => {
        // Arrange
        statement = new Statement();
        const one = new Statement(`10 / 01 / 2012`, `1000`, ``, `1000`);
        const two = new Statement(`13 / 01 / 2012`, `2000`, ``, `3000`);
        const three = new Statement(`14 / 01 / 2012`, ``, `500`, `2500`);
        const expected = 1
        // Act
        statement.addToStatementList(three);
        const actual = statement.statementList.length;
        // Assert
        expect(actual).toBe(expected);
        console.table([one, two, three]);

    });


    // it(`Test 3 - printStatement method can be found`, () => {
    //     // Arrange
    //     const statement = new Statement();
    //     // const expected = ;
    //     // Act
    //     // Assert 
    //     expect(Statement.hasOwnProperty(``)).toBeTrue();

    // });


});

