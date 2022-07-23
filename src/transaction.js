class Transaction {

    #date;
    #amount;
    #type;
    #transactionBalance;

    constructor(date, amount, type) {
        this.#date = date
        this.#amount = amount
        this.#type = type;
        this.#transactionBalance = 0;
    }

    getDate() {
        return this.#date;
    }

    getAmount() {
        return this.#amount;
    }

    getType() {
        return this.#type;
    }

    getTransactionBalance() {
        return this.#transactionBalance;

    }

    setTransactionBalance(amount) { // 3000
        this.#transactionBalance = amount; // 0
    }
}

module.exports = Transaction;