// Replace Element

// Create Element
const newHeading = document.createElement('h2');


// Add id
newHeading.id = 'task-title';
console.log(newHeading);

// New Text Node
newHeading.appendChild(document.createTextNode('Task LLst'));

// Get old heading
const oldHeading = document.getElementById('task-title');
console.log(oldHeading);

// Parent
const cardAction = document.querySelector('.card-action');

// Replace (new, old)
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove Child
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTES

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
console.log(val);

val = link.classList;
console.log(val);

val = link.classList[0];
console.log(val);

val = link.classList.add('test');
val = link;
console.log(val);

link.classList.remove('test');
console.log(val);

// Attributes
val = link.getAttribute('href');
console.log(val);
// Check to see link by clicking link 
val = link.setAttribute('href', 'http://google.com');
console.log(val);

link.setAttribute('title', 'google');
console.log(val);

link.removeAttribute('title');
console.log(val);

// Check to see if there's an attribute
val = link.hasAttribute('href');
console.log(val);





