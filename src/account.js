class Account {
    balance = 0;
    listOfTransactions = [];

    getBalance(balance) {
        return this.balance;
    }

    getListOfTransactions() {
       return this.listOfTransactions;
    }
    addToListOfTransactions(transaction) {
        this.listOfTransactions.push(transaction);
    }
}

module.exports = Account;