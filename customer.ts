abstract class customer{
    public name:string
    public age:any
    public address:string
    public contactnum:any

    constructor(name:string,age:any,address:string,contactnum:any){
        this.name=name
        this.age=age
        this.address=address
        this.contactnum=contactnum
    }
    abstract function access_details():void{

    }
}
 class loan extends customer{
    public LoanAccountNo:number
    public LoanType:string
    public LoanAmount:number
    public Duration :any
    public intrestrate:any

    constructor(name:string,age:any,address:string,contactnum:any,LoanAccountNo:number, LoanType:string,LoanAmount:number,Duration :any,intrestrate:any){
             super(name,age,address,contactnum)
             this.LoanAccountNo=LoanAccountNo
             this.LoanType=LoanType
             this.LoanAmount=LoanAmount
             this.Duration=Duration
             this.intrestrate=intrestrate 
            }
            public function access_details():void{
                console.log(`name:${this.name}`)
                console.log(`age:${this.age}`)
                console.log(`address:${this.address}`)
                console.log(`contactnum:${this.contactnum}`)
                console.log(`loanaccountno:${this.LoanAccountNo}`)
                console.log(`loantype:${this.LoanType}`)
                console.log(`loanamount:${this.LoanAmount}`)
                console.log(`duration:${this.Duration}`)
                console.log(`intrestrate:${this.intrestrate}`)
                console.log("the intrest rate is:",(this.LoanAmount + this.Duration + this.intrestrate)/100);
                }
                
}
let d=new loan('ranita',20,'kovai',9025457758,1111,'private',20000,'1 year',20)
d.access_details()
