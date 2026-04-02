// to use switch case your variable value match with switch case then switch statement run
let val = 2
switch (val) {
    case 1:
        console.log("abc");
        break;
    case 2:
        console.log("cde");
        break
    case 3:
        console.log("efg");
    default:
        console.log("correct");
        break;
}

// falsy values

// false
// 0
// -0
// BigInt
// 0n
// ""
// null
// undefined
// NaN

// turthy value

// "0"
// 'false'
// " "
// []
// {}
// function() {}

// it run the if statement
let arr = []
if(arr) {
    console.log("success");
}

// it run the if statement
let obj = {}
if(Object.keys(obj).length === 0) {
    console.log("true");   
}

// Null Coalescing Operator ??
let val1, val2, val3, val4;

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 20
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator

let tea = 50
tea <= 50 ? console.log("tea under budget") : console.log("tea is over budget");


