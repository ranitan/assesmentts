interface savingaccount {
  a_id: any;
  a_name: string;
  balance(amount?: any, interest?: any): void;
}

interface currentaccount {
  a_id: any;
  a_name: string;
  balance(amount?: any, interest?: any): void;
}

class acc implements savingaccount, currentaccount {
  a_id: any;
  a_name: string;
  constructor(a_id: any, a_name: string) {
    this.a_id = a_id;
    this.a_name = a_name;
  }
  balance(amount?: any, interest?: any) {
    console.log(`account details`);
    console.log(`the id:${this.a_id}`);
    console.log(`the name:${this.a_name}`);
    if (interest != null) {
      console.log("the savingaccount:", amount + amount * interest);
    } else {
      console.log("the current account: ", +amount);
    }
  }
}
var s = new acc(101, "ranita");
s.balance(1000, 5);
var c = new acc(102, "harish");
c.balance(1000, 5);
