class Account {

    #balance;
    #listOfTransactions = [];


    constructor(balance = 0) {
        this.#balance = balance;
    }


    getBalance() {
        return this.#balance;
    }


    setBalance(newBalance) {
        this.#balance = newBalance;
    }


    get listOfTransactions() {
        return this.#listOfTransactions;
    }


    addToListOfTransactions(transaction) {
        this.#listOfTransactions.push(transaction);
    }
}

module.exports = Account;
