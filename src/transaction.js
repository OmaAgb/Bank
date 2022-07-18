class Transaction {

    constructor(date, amount, type) {
        this.date = date;
        this.amount = amount;
        this.tBalance = 0;
        this.type = type;
    }

    setTBalance(amount) {
        this.tBalance = amount;
    }
}

module.exports = Transaction;