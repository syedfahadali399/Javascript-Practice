let num = 10.554545

// convert number into string
console.log(num.toString());
// convert number into string and find its length
console.log(num.toString().length);
// it increase the value by pionts if the value is 10.5545 and we give 3 in the 
// method then it only change the value after . like 10.5545 so we give the value
// it change into 10.555
console.log(num.toFixed(3));
// it use to find the value
console.log(num.valueOf());

let otherNum = 123.8999
// change the value of num if value 123 then it convert into 124 if the method value is 
//  2 then we give the value 10.5 then it convert it into 11
console.log(otherNum.toPrecision(3));

let bigNum = 100000000
// convert num to small num with pionts like 100,000,000
console.log(bigNum.toLocaleString());

// console.log(num.toExponential('dfd'));