class Customer{
  

    constructor(private _firstName: string, private _lastName: string){
        
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string){
         this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string){
         this._lastName;
    }
}


// let's create an instance

let myCustomer = new Customer("martin","loutherKing");




console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

