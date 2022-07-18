class Account {

    #balance;
    #listOfTransactions = [];


    constructor() {
        this.#balance = 0;
    }


    getBalance() {
        return this.#balance;
    }


    setBalance(amount, type) {
        if (type === 'credit') { this.#balance = this.#balance + amount; }
        if (type === 'debit') { this.#balance = this.#balance - amount; }
    }


    getListOfTransactions() {
        return this.#listOfTransactions;
    }


    addTransaction(transaction) {
        this.#listOfTransactions.push(transaction);
    }

    makeTransaction(transaction) {
        this.setBalance(transaction.amount, transaction.type);
        transaction.setTBalance(getBalance());
        this.addTransaction(transaction);
    }
}

module.exports = Account;
