import { Calculator, foo } from './10-module';
import xxx from './10-module';
let myVar;
myVar = false;
class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullName = firstname + ' ' + lastname;
    }
    getFullName() {
        return this.fullName;
    }
}
const klaus = new User('Klaus', 'Müller');
klaus.getFullName();
const calc = new Calculator();
console.log(calc.add(1, 2));
console.log(xxx);

