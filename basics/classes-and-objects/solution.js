// classes and objects

/**
 * 1.
 */
function User (firstName) {}
//             ^
// ____________| Note: the argument is actually not necessary for the code to run


/**
 * 2.
 */
function User (firstName) {
  this.firstName = firstName;
}


/**
 * 3.
 */
function User (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};


/**
 * 4.
 */
const propertyValueArray = propertyArray.map(property => myFullnameUser[property]);


/**
 * 5.
 */
const getFullnameFunc = myFullnameUser.getFullName.bind(myFullnameUser);
//                                                 ^
//                                                 | this way the function will always get the
// ________________________________________________| myfullnameUser as a scope


/**
 * 6.
 */
class User {

  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}


/**
 * 7.
 */
class User {

  // ...

  get fullName () {
    return this.getFullName();
  }

  // ...
}


/**
 * 8.
 */
class User {

  constructor(firstName, lastName, id) {
    // ...
    Object.defineProperty(this, 'id', { value: id, writable: false });
  }

  // ...
}


/**
 * 9.
 */
class User {

  // ...

  static getClassDescription () {
    return 'A User class.';
  }
}


/**
 * 10.
 */
class AdminUser extends User {

  constructor (firstName, lastName, id) {
    super(firstName, lastName, id);
    this.admin = true;
  }
}
