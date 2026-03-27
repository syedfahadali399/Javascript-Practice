let course = {
    names: "fahad",
    course_name: "javascript",
    price: 999,
}

// its a way to access the price key in object
let {price} = course
// its a way to access the price key in object and change into another name
let {price: instructor} = course

const activity = 'Surfing';
const time = "20 Minutes"
const beach = { activity, time };
console.log(beach); 
// { activity: 'Surfing', time: '20 Minutes' }

console.log(classElection.place); // undefined



console.log(price);
console.log(instructor);