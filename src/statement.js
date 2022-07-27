class Statement {

    printStatement(Account) {

        this.printHeader();

        for (let i = Account.getListOfTransactions().length - 1; i >= 0; i--) {

            console.log(Account.getListOfTransactions()[i].getDate() + `||` + Account.getListOfTransactions()[i].isCredit() + ` ||` + Account.getListOfTransactions()[i].isDebit() + `    ||` + Account.getListOfTransactions()[i].getTransactionBalance());
        }
    }

    printHeader() {
        console.log(` Date     ||Credit||Debit ||Balance`);
    }
}

module.exports = Statement;
