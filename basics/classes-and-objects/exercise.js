// classes and objects

/**
 * 1. Define a User class (in ES5 notation) that accepts a first name as argument so that the
 * following code works and '1. Success!' is printed out:
 */
const myUser = new User('Max');
if (myUser instanceof User) {
  console.log('1. Success!');
}


/**
 * 2. Change the User constructor so that the following code works and '2. Max' is printed out:
 */
console.log(`2. ${myUser.firstName}`);


/**
 * 3. Change the User class definition to accept a second argument for the last name and then
 * add a method to the User class for returning the full name, so that the following code
 * works and '3. Mueller - Max Mueller' is printed out (Note -> this method should exist only
 * once in memory, regardless of how many users we instantiate):
 */
const myFullnameUser = new User('Max', 'Mueller');
console.log(`3. ${myFullnameUser.lastName} - ${myFullnameUser.getFullName()}`);


/**
 * 4. Use the following array of properties to create a new array containing the matching value
 * of each of those properties in myFullnameUser, so that '4. Max Mueller' is printed out. The
 * variable containing the result array should be called 'propertyValueArray':
 */
const propertyArray = ['firstName', 'lastName'];
console.log(`4. ${propertyValueArray.join(' ')}`);


/**
 * 5. Fix the following code so that '5. Max Mueller' is printed out:
 */
const getFullnameFunc = myFullnameUser.getFullName;
console.log(`5. ${getFullnameFunc()}`);


/**
 * 6. Transform the class definition from ES5 to ES2015 Syntax, so that '6. Success!' is printed out:
 */
function isES2015Class (func) {
  return typeof func === 'function' && /^class\s/.test(Function.prototype.toString.call(func));
}
if (isES2015Class(User)) {
  console.log('6. Success!');
}


/**
 * 7. Add a dynamic property to User called 'fullName' that returns the same as getFullName.
 */
console.log(`7. ${myFullnameUser.fullName}`);


/**
 * 8. Change the User constructor to accept an additional parameter for the 'id'. Then, save the id
 * to the User instance, but make it non-writable so that, for example, 'myIdUser.id = 2' does not work.
 * If successful, '8. Success!' will be printed out:
 */
const myIdUser = new User('Max', 'Mueller', 1);
myIdUser.id = 2;
if (myIdUser.id === 1) {
  console.log('8. Success!');
}


/**
 * 9. Add a static method to the User called 'getClassDescription', so that '9. A User class.' is
 * printed out:
 */
console.log(`9. ${User.getClassDescription()}`);


/**
 * 10. Create a class called AdminUser which inherits from User and additionally contains a fixed property
 * called 'admin' that is always set to true. If successful, '10. Max Mueller - admin' will be printed out:
 */
const myAdminUser = new AdminUser('Max', 'Mueller', 1);
console.log(`10. ${myAdminUser.fullName} - ${myAdminUser.admin ? 'admin' : ''}`);
