// this select the parent element
let parent = document.querySelector(".parent")
// this select the first parent element
parent.firstElementChild.textContent = "Monda"
// this select the last parent element
parent.lastElementChild.textContent = "Thursda"
// this select the second parent element by this method
parent.children[2].innerHTML = "Wednesday"
// this select all the class name by start with day
let child = document.querySelector(".day")
// it set the background Color green
// and it also select parent element div by this method
child.parentElement.style.backgroundColor = "green"
// by this method you can select next his element
child.nextElementSibling.style.backgroundColor = "pink"
// this help to see parent node that include text / comment / and element like div,h1
console.log(parent.childNodes);

// create element
let li = document.createElement('li')
// not prefer
// div.textContent = "Friday"
let addText = document.createTextNode("Friday")
li.id = "unique"
// not prefer
// div.className = "unique"
li.setAttribute("class", "day")
li.style.backgroundColor = "black"
li.style.color = "white"
li.appendChild(addText)
let append = document.querySelector(".parent").appendChild(li)