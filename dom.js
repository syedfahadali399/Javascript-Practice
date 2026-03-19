// this tell how to get html element by id
document.getElementById("title")
// this tell how to get the name of the id 
document.getElementById("title").id
// this tell how to get class name of the html element that have "title" name id
document.getElementById("title").className
// this tell how to get the name of the id 
document.getElementById("title").getAttribute('id')
// this tell how to get the name of the class name
document.getElementById("title").getAttribute('class')
// this tell how to change the class name and add class name if does not exist
document.getElementById("title").setAttribute("class", "test")
// this tell how to change the class name and add 1 or more class name if does not exist
document.getElementById("title").setAttribute("class", "test heading")
// this is way to the change the background of the attribute
document.getElementById("title").style.backgroundColor = "green"

// <h1>this is fahad<span>handsome</span></h1>

// this return all the text with attribute "<h1>this is fahad<span>handsome</span></h1>"
document.getElementById("title").innerHTML = "wow"
// in this case you get only this text "this is fahad"
document.getElementById("title").innerText = "wow"
// but in this case you get whole case "this is fahad handsome"
document.getElementById("title").textContent = "wow"
// it select the first h1 tag in the div if there's a lot of div
document.querySelector("h1")
// you can also select by this method
document.querySelector(".change")
document.querySelector("#change")
document.querySelector('input[type="password"]')
document.querySelector('p:first-child')
// example
let myul = document.querySelector('ul')
let myli = myul.querySelector('li')
myli.textContent = "five"
// it select all the inner element in the li tag
const ul = document.querySelectorAll("li")
ul[0].style.color = "green"
// if there 1 elemnet in the list and you have to use querySelectorAll you have use the previous method
let h1 = document.querySelectorAll('h1')
h1[0].style.color = "green" // true
h1.style.color = "green" // false

// node list and html collection are differnet in node list you use forEach method
// but in html collection you does not use forEach method
let convert = document.getElementsByClassName("list-item")
// by applying this method html collection converted into array
Array.from(convert)