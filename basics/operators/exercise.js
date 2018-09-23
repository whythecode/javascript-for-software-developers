// strict equals, && vs. ||

/**
 * 1. Fix the following code so that it only prints 'hello number' and NOT 'hello text':
 */
const value = 5;

if (value == '5') {
  console.log('hello text');
}
if (value === 5) {
  console.log('hello number');
}


/**
 * 2. Without running the code, what is the value of the variable 'result' in the following statement?
 */
const result = ('a' && 'b') && 3 || 0 && (1 || 2 && 5);
