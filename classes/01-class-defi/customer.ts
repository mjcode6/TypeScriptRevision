class Customer{
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}


// let's create an instance

let myCustomer = new Customer("martin","loutherKing");

 /* myCustomer.firstName = "martin";
 myCustomer.lastName = "loutherKing"; */


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

