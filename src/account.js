class Account {
    balance = 0;
    listOfTransactions = [];

    getBalance(balance) {
        return this.balance;
    }

    getListOfTransactions() {
        this.listOfTransactions;
    }
    addToListOfTransactions() {
        this.listOfTransactions.push(transaction);
    }
}

module.exports = Account;