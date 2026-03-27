let numarr = [1,2,3,4,5]

// it give the value that at index 0
console.log(numarr[0]);
// it add the value 6 at the end of the array
numarr.push(6);
// it delete the value of arr at the last index
numarr.pop();
// it add the value 6 at the begining of the array
numarr.unshift(0);
// it delete the value of arr at the start index
numarr.shift();
// it reverse the array
numarr.reverse()
// it sort the array if the value are in woring order
numarr.sort()
// it give me the keys in the array
console.log(numarr.keys());
// it give the value in the array
console.log(numarr.values());
// it give the value that stand at the index 4 in the array
console.log(numarr.lastIndexOf(4));

// Returns true if any item matches and it is use for sreaching and checking
numarr.some((e) => {
    if(e == 2) {
        console.log("2 is found");
    }
    
})

// It loops through each item in an array and executes a function for each item
let numbers = [10, 20, 30];
numbers.forEach((num, i) => {
    console.log(`Index ${i} = ${num}`);
});

// if fill all the array value with 5
console.log(numarr.fill(5))

let num2 = [1, 2, 3, 4, 5, 6]

// it convert the array value into string
console.log(num2.toString());
//  creates a new array by applying a function to each element of the original array.
console.log("map start");
num2.map((e) => {
    e = e * 2
    console.log(e);
});
console.log("map end")

//  creates a new array by applying a function to each element of the original array.
console.log("filter start");
let names = ["Ali", "Fahad", "John", "Zain"];
let longNames = names.filter(name => name.length > 4);
console.log(longNames);
console.log("filter end");

// it returns the first element in the array that matches a condition.
let namess = ["Ali", "Fahad", "Zain"];
let nam = namess.find(n => n.startsWith("F"));
console.log(nam); // "Fahad"

// if the value in splice is 0,1 it ignore the value that at index 0 and end at the 1 index 
console.log(num2.splice(0,1));

let num3 = [1,2,3,4,5,6,7]

// it retrun true if the value in the array is 
console.log(num3.includes(1));
// it return the length of the array
console.log(num3.length);
// it give the value that stand at the index 4 in the array
console.log(num3.indexOf(2));

// it jion the one array with the another array and make a new array but it give value in the form of string type
let newArr = num3.join()
console.log(newArr);
console.log(typeof newArr);

let strarr = new Array("fahad", "aqeel", "wasay")
console.log(strarr);

let arr4 = [1,2,3,4,5]
let arr5 = [6,7,8,9,10]
// it combine two array with the help of spread operator
let arr6 = [...arr4, ...arr5]
console.log(arr6);

// flat() creates a new array by flattening nested arrays into a single-level array.
let complex_arr = [1,2,3,[4,5,6],7,8,[4,5]]
console.log(complex_arr.flat());

let my_name = "fahad"
let small_arr = [1,2,3]
let scr = 100
let scr2 = 200
let scr3 = 300
// it return true if the variable is in the form of array or not
console.log(Array.isArray(my_name));
console.log(Array.isArray(small_arr));
// it combine multiple variable value and create a new array
console.log(Array.of(scr, scr2, scr3));
// it work on the string if the value is fahad it spilt the every word of fahad and return the array
console.log(Array.from(my_name));
console.log(Array.from(scr));