let course = {
    names: "fahad",
    course_name: "javascript",
    price: 999,
}

// its a way to access the price key in object
let {price} = course
// its a way to access the price key in object and change into another name
let {price: instructor} = course

console.log(price);
console.log(instructor);