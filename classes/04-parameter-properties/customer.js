"use strict";
class Customer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName;
    }
}
// let's create an instance
let myCustomer = new Customer("martin", "loutherKing");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
