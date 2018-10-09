// scope

// Hoisting

/**
 * 1. Why does the following code work?
 * Fix the code, so it reflects what the js engine actually does
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Not a number');
  }
  result = a + b;
  
  console.log('The result is: ', result);
  var result;
}

/**
* 2. Write a function createUser that returns a user object
* This user object has a function info, that prints the first and last name of the user and 
* the age of the user.
* Use closeure scoping to permit editing of all three values
*/

function createUser(firstName, lastName, age) {
  // your code goes here
}

const klaus = createUser('Klaus', 'Müller', 42);
klaus.info(); // Klaus Müller (42)
klaus.firstName = 'Klaus';
klaus.info(); // Klaus Müller (42)


/**
 * 3. Fix the following code
 */
function divide(a, b) {
  try {
    if (b === 0 ) {
      throw new Error('Only Chuck Norris is able to divide by 0');
    }
    const result = a / b;
  } catch (e) {
    console.error(e);
  }
  console.log(result);
}