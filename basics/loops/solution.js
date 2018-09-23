// loops

/**
 * 1.
 */
for (let i = 0, len = library.length; i < len; i++) {
  const book = library[i];
  console.log(`${book.title} - ${book.read ? 'read' : 'not read'}`);
}


/**
 * 2.
 */
library.forEach(book => console.log(`${book.title} - ${book.read ? 'read' : 'not read'}`));


/**
 * 3.
 */
for (const property in objForIn) {

  if (!objForIn.hasOwnProperty(property)) return;

  console.log(`${property} - ${objForIn[property]}`);
}


/**
 * 4.
 */
// ...
const doubledNumbers = numbers.map(number => number * 2);
// ...


/**
 * 5.
 */
// ...
const stringValues = mixedValues.filter(value => typeof value === 'string');
// ...


/**
 * 6.
 */
// ...
const sum = sumNumbers.reduce((total, number) => {
  return total + number;
}, 0);
// ...
