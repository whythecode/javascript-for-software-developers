
function asyncFunction (callback) {

  setTimeout(() => callback('my value'), 1000);
}

asyncFunction(value => console.log(value));
console.log('Hello');

/** Callback Pyramid of Doom
fs.exists(() => {

  fs.open(() => {

    // do something

    fs.close();
  })
});
 */

// Promises!!

function promiseFunction () {

  return new Promise((resolve, reject) => {

    setTimeout(() => resolve('Hello World'), 1000);
  });
}

console.log(promiseFunction());

promiseFunction()
  .then(
    value => {
      console.log(value);
      return promiseFunction();
    },
    //err => console.error(err)
  )
  .then(value => value + ' 2')
  .then(
    value => console.log(value),
    //err => console.error(err)
  )
  .catch(err => console.log(err));

Promise.all([promiseFunction(), promiseFunction()])
  .then(values => console.log(values))
  .catch(err => console.log(err));

Promise.race([promiseFunction(), promiseFunction()])
  .then(value => console.log('race', value));

(async function () {

  var value = await promiseFunction();
  var value2 = await promiseFunction();
  var value3 = await promiseFunction();
  var value4 = Promise.all([promiseFunction()]);
  console.log('await', value, value2, value3, value4);

  try {
    console.log('log try', await promiseFunction());
  } catch(e) {
    console.log(e);
  }
  // var fetchValue = await fetch('/');
})();

setTimeout(() => console.log('yo'), 1000);


