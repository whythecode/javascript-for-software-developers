class Person {
  constructor(age) {
    this.age = age;
  }
}


class User extends Person {
  constructor(firstname, lastname, password, age) {
    super(age);
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`
  }

  doAge() {
    // const self = this;
    // setTimeout(function () {
    //   self.age++;
    // }, 1000);
    // setTimeout(function() {
    //   this.age++;
    // }.bind(this), 1000);
    
    // this is how we do it
    setTimeout( () => {
        this.age++;
      }, 1000);
  }
}

const rüdiger = new User('Rüdiger', 'Schmidt', 'topSecret', 43);
const klaus = new User('Klaus', 'Müller', 'secret', 14);

console.log(klaus);
console.log(rüdiger);

klaus.doAge();

setTimeout(() => {
  console.log(klaus.age);
}, 1001);