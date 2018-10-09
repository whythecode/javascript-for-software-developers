// data types

/**
 * 1. Given an array of values, find out how many falsy values are contained
 */
var falsyValues = ['a', 1, 0, '', [], {}, {a: 'b'}, false, {1: false}];
var falsyCount = 0;
for (var i = 0; i < falsyValues; i++) {
  if (!falsyValues[i]) {
    falsyCount++;
  }
}
console.log(falsyCount);

console.log(falsyValues.reduce((prev, curr) => {
  if (!curr) {
    prev++;
  }
  return prev;
}, 0))

/**
 * 2. There are pillars near the road. The distance between the pillars is the same and 
 * the width of the pillars is the same. Your function accepts three arguments:
 * 
 * - number of pillars (>= 1)
 * - distance between pillars (10 - 30 m)
 * - width of the pillar (10 - 50 cm)
 * 
 * Calculate the distance between the first and the last pillar in centimeters
 * (without the width of the first and last pillar)
 */

function pillars(numOfPillars, distance, width) {
  const between = (numOfPillars - 1) * distance;
  const pills = numOfPillars > 2 ? (numOfPillars - 2) * width : 0;
  return between + pills;
}

/**
 * 3. An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that
 * contains only letters is an isogram. Assume that empty string is an isogram. Ignore
 * letter case.
 */

function isIsogram(word) {
  // your code goes here
  const letters = {};
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (letters[char]) {
      return false;
    }
    letters[char] = 1;
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('aba')); // false
console.log(isIsogram('moOse')); // false
