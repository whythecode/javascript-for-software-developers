// data types

/**
 * 1. Given an array of values, find out how many falsy values are contained
 */
const falsyValues = ['a', 1, 0, '', [], {}, {a: 'b'}, false, {1: false}];

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
  let result = 0;
  // your code goes here
  return result;
}

/**
 * 3. An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that
 * contains only letters is an isogram. Assume that empty string is an isogram. Ignore
 * letter case.
 */

function isIsogram(word) {
  // your code goes here
}

isIsogram('Dermatoglyphics'); // true
isIsogram('aba'); // false
isIsogram('moOse'); // false
