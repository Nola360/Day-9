// Create an Element

const li = document.createElement('li');

// Add Class
li.className = 'collection-item';
console.log(li);

// Add Id
li.id = 'new-item';
console.log(li);

// Add Attribute
li.setAttribute('title', 'New Item');
console.log(li);

// Create a text Node & append
li.appendChild(document.createTextNode('Hello Wolrd!'));
console.log(li);

// Create New Link Element
const link = document.createElement('a');

// Add Classes
link.className = 'delete-item secondary-content';

// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link);


// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);