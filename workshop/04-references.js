const john = {
  name: 'john'
};

const john2 = john;

console.log(john);
console.log(john2);

john.name = 'joe';

console.log(john);
console.log(john2);


john2.name = 'Dirk';

console.log(john);
console.log(john2);



const billy = {
  name: 'billy',
  birthdate: {
    year: 1970
  }
};

function marify(obj) {
  // const clone = {...obj};
  //const clone = Object.assign({}, obj);
  const clone = JSON.parse(JSON.stringify(obj));
  clone.name = 'mary';
  clone.birthdate.year = 1900
  console.log(clone);
}
marify(billy);
console.log(billy);

const str2 = 'Bla';
function byValue(str) {
  str = 'foo';
  console.log(str);
}

byValue(str2);
console.log(str2);