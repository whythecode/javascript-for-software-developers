// rest / spread

/**
 * 1.
 */

// --------------------------| REST
//                           ⌄
function makeItem (id, name, ...labels) {

  return {
    id: id,
    name: name,
    labels: [
      'item',
      ...labels
//    ^
// ___| SPREAD

    ]
  };
}
