class Statement {

    printStatement(Account) {

        for (let i = 0; i < Account.getListOfTransactions().length; i++) {
            console.log(Account.getListOfTransactions()[i].getDate() + `||` + Account.getListOfTransactions()[i].getAmount() + `||` + Account.getListOfTransactions()[i].getType());
        }; 

       return `Your statement is now ready to view`;
    };
}


module.exports = Statement;
