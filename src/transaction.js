class Transaction {

    #date;
    #amount;
    #type;
    #transactionBalance;

    constructor(date, amount, type) {
        this.#date = date;
        this.#amount = amount;
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

    isCredit() {
        if (this.#type === `credit`) {
            return this.getAmount();
        }
        if (this.#type === `debit`) {
            return `    `;
        }
    }

    isDebit() {
        if (this.#type === `debit`) {
            return this.getAmount();
        }
        if (this.#type === `credit`) {
            return `    `;
        }
    }

    getTransactionBalance() {
        return this.#transactionBalance;
    }

    setTransactionBalance(amount) { // 3000
        this.#transactionBalance = amount;
    }
}

module.exports = Transaction;




