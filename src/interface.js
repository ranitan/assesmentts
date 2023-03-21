"use strict";
class account {
    balance(account_type, balance_amt) {
        console.log("the type is:" + account_type + " " + " the balance Amount is :" + balance_amt);
    }
}
let a = new account();
a.balance("savings", 20000);
let b = new account();
b.balance("current", 30000);
