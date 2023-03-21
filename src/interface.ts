interface savingaccount {
    balance(account_type: string,balance_amt: number):void;
}

interface currentaccount {
    balance(account_type: string,balance_amt: number):void;
}

class account implements savingaccount, currentaccount {
   
  balance(account_type: string, balance_amt: number) {
      console.log("the type is:" + account_type +" " + " the balance Amount is :" + balance_amt)
  }
}

let a = new account()
a.balance("savings",20000)
let b = new account()
b.balance("current",30000)

 

    
