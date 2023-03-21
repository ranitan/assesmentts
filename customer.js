"use strict";
class customer {
    constructor(name, age, address, contactnum) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.contactnum = contactnum;
    }
}
function access_details() {
}
class loan extends customer {
    constructor(name, age, address, contactnum, LoanAccountNo, LoanType, LoanAmount, Duration, intrestrate) {
        super(name, age, address, contactnum);
        this.LoanAccountNo = LoanAccountNo;
        this.LoanType = LoanType;
        this.LoanAmount = LoanAmount;
        this.Duration = Duration;
        this.intrestrate = intrestrate;
    }
    access_details() {
        console.log(`name:${this.name}`);
        console.log(`age:${this.age}`);
        console.log(`address:${this.address}`);
        console.log(`contactnum:${this.contactnum}`);
        console.log(`loanaccountno:${this.LoanAccountNo}`);
        console.log(`loantype:${this.LoanType}`);
        console.log(`loanamount:${this.LoanAmount}`);
        console.log(`duration:${this.Duration}`);
        console.log(`intrestrate:${this.intrestrate}`);
        console.log("the intrest rate is:", (this.LoanAmount + this.Duration + this.intrestrate) / 100);
    }
}
let d = new loan('ranita', 20, 'kovai', 9025457758, 1111, 'private', 20000, '1 year', 20);
d.access_details();
