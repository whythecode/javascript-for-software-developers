// rest / spread

/**
 * 1. Change the following function so that it accepts an indeterminate amount of labels after
 * 'name'. Then, add those labels to the corresponding property in the returned object. If
 * successful, '1. {"id":123,"name":"book","labels":["item","red","green"]}' will be printed out:
 */
function makeItem (id, name) {

  return {
    id: id,
    name: name,
    labels: [
      'item'
    ]
  };
}
const item = makeItem(123, 'book', 'red', 'green');
console.log(`1. ${JSON.stringify(item)}`);
