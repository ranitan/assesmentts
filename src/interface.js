"use strict";
class amount {
    balance(account_type, balance_amt) {
        console.log("the type is:" + account_type + " " + " the balance Amount is :" + balance_amt);
    }
}
let a = new amount();
a.balance("savings", 20000);
let b = new amount();
b.balance("current", 30000);
