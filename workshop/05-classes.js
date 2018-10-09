// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

// Constructor function 
function User(firstname, lastname, password) {
  // property definition
  this.firstname = firstname;
  this.lastname = lastname;
  this.password = password;
}

User.createUser = function () {

  return new User();
}
User.createUser();

// Method definition
User.prototype.getFullName = function() {
  return `${this.firstname} ${this.lastname}`;
}

// instanciation
const rüdiger = new User('Rüdiger', 'Schmidt', 'topSecret');
const klaus = new User('Klaus', 'Müller', 'secret');

console.log(klaus.createUser);

User.prototype.age = 42;

User.prototype.toString = function () {
  return this.getFullName();
}
klaus.age = 14;
klaus.weihnachten = 'dez';
console.log(klaus);
console.log(rüdiger.age);

console.log(klaus.toString());

console.log(Object.keys(klaus));
console.log(Object.keys(User.prototype));

console.log(klaus.hasOwnProperty('firstname'));
console.log(klaus.hasOwnProperty('age'));

console.log (typeof klaus)
console.log(klaus.constructor);

const myGetFullName = klaus.getFullName;

console.log(myGetFullName());
console.log(klaus.getFullName());

const obj = {
  firstname: 'Obj',
  lastname: 'ekt',
  getFullName:myGetFullName
}
console.log(obj.getFullName());

const boundGetFullName = myGetFullName.bind(klaus);
console.log(boundGetFullName());
console.log(myGetFullName.call(klaus, 1, 'a'));
console.log(myGetFullName.apply(klaus, [1, 'a']));

