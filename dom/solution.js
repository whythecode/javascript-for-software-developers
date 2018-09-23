// DOM

/**
 * 1.
 */
const list = document.getElementById('list-with-id');
['F', 'G'].forEach(text => {
  const element = document.createElement('li');
  element.innerText = text;
  list.appendChild(element);
});


/**
 * 2.
 */
list.removeChild(list.firstElementChild);
list.removeChild(list.firstElementChild);


/**
 * 3.
 */
Array.from(list.getElementsByTagName('li')).forEach(element => {

  element.addEventListener('click', event => event.target.innerText += ' clicked');
});


/**
 * 4.
 */
Array.from(list.getElementsByTagName('li')).forEach(element => {

  element.addEventListener('click', event => {

    // ...

    event.target.dispatchEvent(new CustomEvent('custom:my-click', { bubbles: true }));
  });
});


/**
 * 5.
 */
list.addEventListener('custom:my-click', () => {

  const item = document.createElement('li');
  item.innerText = 'item';
  list.appendChild(item);
});


/**
 * 6.
 */
list.addEventListener('click', event => {

  if (event.target.nodeName === 'LI') {
    event.target.innerText += ' clicked';
    event.target.dispatchEvent(new CustomEvent('custom:my-click', { bubbles: true }));
  }
});
