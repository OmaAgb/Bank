class Transaction {
    
    constructor(date = ``, amount = Number, transactionType = `credit` || `debit`, newBalance = Number) {
        this.date = date;
        this.amount = amount;
        this.newBalance = newBalance;
        this.transactionType = transactionType;
    }
}

module.exports = Transaction;