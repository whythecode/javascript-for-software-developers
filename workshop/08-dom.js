
document.childNodes;
document.childNodes[1].childNodes;

document.querySelector('body')
        .appendChild(document.createElement('div'));

document.querySelector('.myClassSelector').onclick = function(event) {
  console.log(event);
};

console.log('https://developer.mozilla.org/de/docs/Web/Events');

document.querySelector('body').onclick = function(event) { 
  console.log(event.target); 
}


