class Account {

    #balance;
    #listOfTransactions = [];

    constructor(balance = 0) {
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(amount, transactionType) { // 2000, 'debit'
        if (transactionType === `credit`) 
            this.#balance += amount; // 1000 + 2000
        else if(transactionType === `debit`) {
            this.#balance -= amount;
        };
    }

    getListOfTransactions() {
        return this.#listOfTransactions;
    }

    addToListOfTransactions(transaction) {
        this.#listOfTransactions.push(transaction);
    }

    makeTransaction(transaction) { // 2000 , 'debit'
        this.setBalance(transaction.getAmount(), transaction.getType()); // 3000
        transaction.setTransactionBalance(this.getBalance()); // getBalance() = 3000
        this.addToListOfTransactions(transaction);
    }
}

module.exports = Account;




