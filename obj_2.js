// this. current context ko refer karta hai
// single ton object
// let obj = new Object()
// non single ton object
let obj = {}

// set obj key and value
obj.name = "fahad"
obj.age = 20
obj.company = "microsoft"
// { name: 'fahad', age: 20, company: 'microsoft' }

console.log(obj);
// access obj key
console.log(Object.keys(obj));
// [ 'name', 'age', 'company' ]

// access obj value
console.log(Object.values(obj));
// [ 'fahad', 20, 'microsoft' ]

// convert obj key and value into seperate array and combine them
console.log(Object.entries(obj));
// [ [ 'name', 'fahad' ], [ 'age', 20 ], [ 'company', 'microsoft' ] ]

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "c", 4: "d"}

// combine two different obj into one object
let obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// combine two different obj into one object
let obj4 = {...obj1, ...obj2}
console.log(obj4);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

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

console.log(arrayOfObj);

arrayOfObj.find((e) => {
    name_find = "fahad"
    if(e.name == name_find) {
        console.log(`${name_find} is found`);
        
    }
})

let obj5 = {
    age: 20
}

// it change the exisiting obj key value but does not add any key value if not exist
Object.seal(obj5)
obj5.age = 18
obj5.city = "Karachi"
console.log(obj5);
// { age: 18 }

// return true if the obj has age key
console.log(obj5.hasOwnProperty("age"));
// true

// combine two array into one object
let entries = [["name", "Ali"], ["age", 30]];
let obj6 = Object.fromEntries(entries);
console.log(obj6); // { name: "Ali", age: 30 }
// { name: 'Ali', age: 30 }

// return obj key
console.log(Object.getOwnPropertyNames(obj6))
// [ 'name', 'age' ]

// loop the object
for(let key in obj6) {
    console.log(`${key} ${obj6[key]}`);    
}
// name Ali
// age 30


// Method	                      Description
// Object.create()	              Creates new object from prototype
// Object.getPrototypeOf()	      Returns prototype of an object
// Object.setPrototypeOf()	      Sets prototype of an object
// Object.defineProperty()	      Manually define a property
// Object.defineProperties()	  Define multiple properties
// Object.getOwnPropertyNames()   Get all own property names (even hidden)
// Object.is()	                  Compares two values (better than ===)
// Object.preventExtensions()	  Blocks adding new properties
// Object.isExtensible()	      Checks if properties can be added