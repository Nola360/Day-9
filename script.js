// Treversing the DOM

let val;

const list = document.querySelector('ul.collection');
console.log(list);

const listItem = document.querySelector('li.collection-item:first-child');
console.log(listItem);

val = listItem;
val = list;

console.log(val);

// Get child node of ul (text nodes are just line breaks)

val = list.childNodes;
// console.log(val);

// val = list.childNodes[0];
// console.log(val);

// val = list.childNodes[0].nodeName;
// console.log(val);

// val = list.childNodes[3].nodeType;
// console.log(val);

// Get children element nodes (HTML collection - no text nodes)
val = list.children;
console.log(val);

val = list.children[1];
console.log(val);

list.children[3].textContent = 'Hello World!';
console.log(val);


// Children of Children

list.children[3].children;
console.log(val);

// list.children[3].children[0].id = 'test-link';
// console.log(val);

// First Child
val = list.firstChild;
console.log(val);

// First Element Child
val = list.firstElementChild;
console.log(val);

// Last Child
val = list.lastChild;
console.log(val);

// Last Element Child
val = list.lastElementChild;
console.log(val);

// Count child elements
val = list.childElementCount;
console.log(val);


// Get Parent Node
val = listItem.parentNode;
console.log(val);

val = listItem.parentElement;
console.log(val);

val = listItem.parentElement.parentElement;
console.log(val);

// Get next Siblings
val = listItem.nextSibling;
console.log(val);

val = listItem.nextElementSibling;
console.log(val);

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(val);

//Get Previous Sibling
val = listItem.previousSibling;
console.log(val);

val = listItem.previousElementSibling;
console.log(val);





