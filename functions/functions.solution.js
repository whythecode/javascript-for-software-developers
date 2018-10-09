// functions

/**
 * 1. Given a two-dimensional array of integers, return the flattened version of the arrray with all the integers sorted (ascending) order.
 * 
 * Example:
 * Geven [[3,2,1],[4,5,6],[],[9,7,8]], your function should return [1,2,3,4,5,6,7,8,9]
 * 
 * Hint you can use Array.prototype.reduce and Array.prototype.sort for this
 * Try to solve this task with arrow functions
 */

function flatten(input) {
  return input.reduce((prev, curr) => [...prev, ...curr], []).sort()
}
console.log(flatten([[3,2,1],[4,5,6],[],[9,7,8]]));

 /**
  * 2. You will be given an array of objects representing developers.
  * Your task is to return an array with objects where each object has a property greeting
  * with the following string value:
  * 
  * Hi <first name>, what do you like the most about <language>?
  * 
  * 
  * 
  * const devs = [
  *   {firstName: 'Peter', language: 'JavaScript', greeting: 'Hi Peter, whatdo you like the most about JavaScript'},
  *   {firstName: 'Paul', language: 'JavaScript', greeting: 'Hi Paul, whatdo you like the most about TypeScript'},
  *   {firstName: 'Mary', language: 'JavaScript', greeting: 'Hi Mary, whatdo you like the most about WebAssembly'},
  * ]
  */

function greet(input) {
  return input.map((user) => {
    return {
      ...user,
      greeting: `Hi ${user.firstName}, what do you like the most about ${user.language}`
    }
  })
}

const devs = [
  {firstName: 'Peter', language: 'JavaScript'},
  {firstName: 'Paul', language: 'TypeScript'},
  {firstName: 'Mary', language: 'WebAssembly'},
];

console.log(greet(devs));
/*returns [
  *   {firstName: 'Peter', language: 'JavaScript', greeting: 'Hi Peter, whatdo you like the most about JavaScript'},
  *   {firstName: 'Paul', language: 'JavaScript', greeting: 'Hi Paul, whatdo you like the most about TypeScript'‚ },
  *   {firstName: 'Mary', language: 'JavaScript', greeting: 'Hi Mary, whatdo you like the most about WebAssembly'},
  * ]
  */

  /**
   * 3. Write a function that accepts an array and a callback function. The function returns two arrays. The first array
   * contains all values for which the callback function returns the value true. The second array contains all the values 
   * for which the callback function returns false.
   */



function split(arr, cb) {
  return arr.reduce((prev, curr) => {
    if (cb(curr)) {
      prev[0].push(curr);
    } else {
      prev[1].push(curr);
    }
    return prev;
  }, [[], []]);
}

function isEven(x) {return x % 2 === 0}
  
console.log(split([1,2,3,4], isEven)); // [[2,4],[1,3]] 