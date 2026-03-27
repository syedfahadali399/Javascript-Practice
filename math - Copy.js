// Math Method

// Math is a object
let nums = -10000

// this method convert minus value into plus
console.log(Math.abs(nums));
// this method is when value round value like if value is 4.4 is convert into 4 if 4.6 then 5
console.log(Math.round(4.4));
// this method tell when value is 4.6 or 4.2 it convert into 5
console.log(Math.ceil(4.6));
// this method tell when value is 4.6 or 4.2 it convert into 4
console.log(Math.floor(4.9));
// this method is use to find the square root value of 9 
console.log(Math.sqrt(9));
// this method is use to find the min value in the list
console.log(Math.min(5,3,9,8));
// this method is use to find the max value in the list
console.log(Math.max(5,3,9,8));
// this technique is use to find value between 1 to 10
console.log((Math.random() * 10) + 1);
// this method is use to find the sqaure of 3 value
console.log(Math.pow(3, 2));
// this method is use to find expononet value of variable
console.log(Math.exp(3));

let min = 10
let max = 20
// this technique is use to find value between 10 to 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);