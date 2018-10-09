function hello(paramA, paramB, paramC) {
  
  console.log('Hello');
  console.log(paramA);

  return false;
}

console.log(hello());

function add(a, b = 2) {

  /**
  if (typeof a !== 'number') {
    a = 1;
  }
  (typeof b !== 'number') && (b = 2);

  a = a || 1;
  b = b || 2;
  */
  
  console.log(a, b);
  
  return a + b;
}

console.log(add(2));

function dynamicParams(a, ...other) {

  console.log(a);
  console.log(arguments[1]);
  console.log(other);
}

console.log(dynamicParams(1, 2));

var a = function (a, b, c) {
  console.log(a, b, c);
};
var b = a;

a(1, 2, 3);
b(1, 2, 3);
console.log(a === b);

function runFunc (callback) {

  return callback(1, 2, 3);
}

runFunc(a);
console.log(runFunc(add));

{};

(function(a, b) {

  console.log(a, b);

  var myPrivateVar = 1;
})(1, 2);

// console.log(myPrivateVar);

var add2 = (a, b) => {return a + b};
var add3 = (a, b) => a + b;
var oneParamFunc = a => console.log(a);
var double = num => num * 2;

var doubledArray = [1, 2, 3].map(element => element * 2);
console.log(doubledArray);

// scopes
var a = '1';
let c = 3;

function add() {
  var result = 1 + 2;

  if (true) {
    let b = 4;
    const d = true;
  }

  console.log(a);
  //console.log(c);
}

function outer(a) {
  const value = '3';
  console.log(a);
  return function (b) {
    console.log(b, value);
  }
}

outer(1)(2);
var myFunc = outer();
myFunc();

function factoryFunc (someStableVar) {

  return function(a, b, c) {
    console.log(someStableVar, a, b, c);
  }
}

var myFactoriedFunc = factoryFunc('mysql');
myFactoriedFunc(1, 2, 3);
myFactoriedFunc(3, 4, 5);

hoisting();
function hoisting() {
  // var ghf = undefined;
  
  console.log(ghf);
  var ghf = 2;
  //console.log(bhg); -> Error: is not defined!
  let bhg = 2;
}
hoisting();

//anonymousFunc();
console.log(typeof anonymousFunc);
var anonymousFunc = function() {
  console.log('anon');
};

// var -> function scoped
// let, const -> block scoped

var arr = [[1, 2], [3, 4]]

var flat = [];
arr.forEach(item => {

  item.forEach(subitem => {

    flat.push(subitem);
  });
});

console.log(flat);

var arr2 = [3, 4, 5, ...arr];
console.log(arr2);

function someFunc(a, b) {

  var ariable = [1, 2, 3];
  console.log(ariable.length);
}

someFunc(1, 2);


