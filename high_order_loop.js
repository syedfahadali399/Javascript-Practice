// for of loop work with array
let arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

// for of loop work with string
let greeting = "hello world"
for (const greet of greeting) {
    if(greet == " ") {
        continue
    }
    console.log(`${greet}`);
}

// its a way to create a map
const map = new Map()
map.set('a', 1)
map.set("b", 2)
// console.log(map);
for (const [key, value] of map) {
    console.log(`Key ${key} : Value ${value}`);
}

// for in loop work with object
let obj = {
    name: 'fahad',
    age: 18,
    city: "karachi",
    country: "pakistan"
}
for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);
}

console.log("\n");

// for in loop also work in array 
let arrs = ["c", "typescript", "javascript", "python", "css", "html", "nextjs"]
for (const key in arrs) {
    console.log(`key ${key} : value ${arrs[key]}`);
}

console.log("\n");

let arrss = ["c", "typescript", "javascript", "python", "css", "html", "nextjs"]

arrss.forEach(function(val) {
    console.log(`${val}`);
})

console.log("\n");

function printMe(item) {
    console.log(`${item}`);
}
arrss.forEach(printMe)

console.log("\n");

arrss.forEach((item, index, arr) => {
    console.log(`${item} : ${index} : ${arr}`);
})

console.log("\n");

let arrayOfObj = [
    {
        id: 1,
        name: "fahad"
    },
    {
        id: 2,
        name: "wasay"
    },
    {
        id: 3,
        name: "usman"
    }
]

arrayOfObj.forEach((index) => {
    console.log(index.name);
})