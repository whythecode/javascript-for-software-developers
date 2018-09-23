// value vs reference

/**
 * 1.
 */
function getObjectClone (origin) {
  return JSON.parse(JSON.stringify(origin));
//       ^
//       | JSON.stringify transforms the entire object tree into a JSON string,
//_______| so when parsing the string, any references to the original object have been broken
}
