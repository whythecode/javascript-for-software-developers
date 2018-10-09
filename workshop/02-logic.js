var i = 'Hello';
var j = 'World';
var k = null;
var l = 'Hello';


if (i && j) {
  console.log(`${i} ${j}`);
}

if (i || j) {
  console.log('we have at least one value', i, j);
}

if (l === i || l === j) {
  console.log(`${l}`);
}

// Shortcut assignment
var a = i || j;
console.log(a);

var myNull = null;
var b = myNull || 'Default value';
console.log(b);

// conditional execution
a && console.log('hello World');       // log hello World
myNull && console.log('Hello Berlin'); // do not log Hello Berlin

console.log(null || false);
