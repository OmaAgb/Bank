class Transaction {

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
    constructor(date, amount, transactionType, currentBalance) {
        this.date = new Date(date);
        this.amount = amount;
        this.currentBalance = currentBalance;
        this.transactionType = transactionType(type)

    }
    transactionType(type) {
        this.transactionType;
        return (type ? 'credit' : 'debit')
    }
}

module.exports = Transaction