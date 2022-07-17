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


// maybe balance should be private?
//need method that adds to balance if credit
//need method that removes from balance if debit 