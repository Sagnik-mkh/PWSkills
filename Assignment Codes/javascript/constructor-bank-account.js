function BankAccount(initialBalance) {
    this.balance = initialBalance;
}

BankAccount.prototype.currentBalance = function () {
    console.log(`Current Balance: ${this.balance}`);
}

BankAccount.prototype.deposit = function (money) {
    if (money > 0) {
        this.balance += money;
        console.log(`Deposit: ${money}, Balance: ${this.balance}`);
    } else console.log("Enter a valid value");
}

BankAccount.prototype.withdraw = function (money) {
    if (money <= this.balance) {
        this.balance -= money;
        console.log(`Withdraw: ${money}, Balace: ${this.balance}`);
    } else console.log(`Insufficent funds ${this.balance}`);
}

const account = new BankAccount(10000);
account.currentBalance();
account.deposit(500);
account.withdraw(1000);
account.currentBalance()