const { ConsoleReporter } = require("jasmine");

class Statement {

statementList = []
 
    constructor(date, credit, debit, balance) {
        this.date = date
        this.credit = credit;
        this.debit = debit;
        this.balance = balance;
    }


    addToStatementList(statement) {
        this.statementList.push(statement);
    }


    printStatement() {
        return this.statement;
    }

}


module.exports = Statement;