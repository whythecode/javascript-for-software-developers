const users = [
  {name: 'Peter'},
  {name: 'Paul'},
];
const otherUsers = [
  {name: 'Mary'}
];

/**
 * 1. Write a function fetchUsers that accepts a callback funtion that
 * will receive an array of user objects after 1 second.
 * Print the user objects to the console
 */

function fetchUsers(cb) {
  setTimeout(() => {
    cb(users);
  }, 1000);
}

fetchUsers(function (u) {
  console.log('1. ', u);
})

/**
 * 2. Modify the fetchUsers function to use promises.
 * The function resolves after 1 second.
 */

 function promiseFetchUsers() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {resolve(users)}, 1000)
   })
 }

 promiseFetchUsers().then((u) => {
   console.log('2. ', u);
 });

/**
 * 3. Use the fetchUsers function with async/await
 */
(async function () {
  const u = await promiseFetchUsers();
  console.log('3. ', u);
})();

/**
 * 4. Write a function fetchOtherUsers that returns a promise
 * with other user objects, that resolves after 2 seconds
 * 
 * a) Use Promise.race, to work with the fastest Promise
 * b) Use Promise.all to combine the two results
 */

 function fetchOterUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(users)}, 2000)
  })
 }

 Promise.race([promiseFetchUsers(), fetchOterUsers()]).then((u) => console.log('4a. ', u));
 Promise.all([promiseFetchUsers(), fetchOterUsers()]).then((u) => console.log('4b. ', u));