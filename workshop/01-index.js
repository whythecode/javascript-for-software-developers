console.log('Willkommen zu: JavaScript für (richtige) Softwareentwickler');
console.log('für Einsteiger und Umsteiger');

console.log('Yara Mayer, Evia, @whythecode');

console.log('Sebastian Springer, MaibornWolff, @basti_springer');

console.log('Der JavaScript Standard: https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf');

console.log('https://developer.mozilla.org/de/');

console.log('https://kangax.github.io/compat-table/es6/');

// To debug a file:
console.log('node --inspect-brk 01-index.js');

var a = '1';
a = false;
a = 1;
a = 1.1;
true;
false;
var b;
console.log(b);
b = null;

1 / 'aaa';

1 / 0;
-1 / 0;

var arr = [];
arr.push(1);
console.log(arr[0]);

var obj = {};
obj.a = 1;
obj.idjsaiodjas = 3;
obj['jidsaodas-aisjdisa-32432'] = 3;
obj.jidsajidaAdsiajdiasjAdjisajdia = 4;

Date;
Math;
String;
Array;
Date.now();
Math.PI;
Math.max(0, 10);
Math.floor(1.5);

var str = '"einfach"';
var zweifach = "'zweifach'";
var template = `ho
ho
${str}
${1 + 2}
${Math.max(0, 10)}
ho
ho`;

console.log('https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/template_strings');

console.log('Inspector: F12 or Cmd + Alt + I etc');


console.log('🦄');

// truthy falsy
var eins = 1;
var zwei = 2;
console.log(eins === zwei);
if (eins) {
  console.log('wahr');
}

// truthy
// 1, true, 'wahr', [], {}, 

// ALWAYS!!! use three ===
1 == '1'  // true - with casting
1 === '1' // false - without casting
1 === parseInt('1', 10); // true - with manual casting

1 !== '1' // true

// falsy
// false, 0, undefined, null, NaN, ''

var jim = {
  name: 'Jim'
}

if (jim && jim.name) {
  console.log(jim.name);
}