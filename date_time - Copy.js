let date = new Date()

console.log(date.toString());
// Fri Jul 11 2025 03:00:01 GMT+0500 (Pakistan Standard Time)
console.log(date.toLocaleString());
// 7/11/2025, 3:00:01 AM
console.log(date.toLocaleDateString());
// 7/11/2025
console.log(date.toLocaleTimeString());
// 3:00:01 AM

let mydate = new Date(2025, 6, 10)
console.log(mydate.toLocaleDateString());
// 7/10/2025

let mydate2 = new Date(2025, 6, 10, 5, 3)
console.log(mydate2.toLocaleString());
// 7/10/2025, 5:03:00 AM

let mydate3 = new Date("2025-07-10")
console.log(mydate3.toLocaleString());
// 7/10/2025, 5:00:00 AM

let date4 = new Date()

// get latest year
console.log(date4.getFullYear())
// get latest month
console.log(date4.getMonth() + 1)
// get latest date
console.log(date4.getDate());
// get latest day
console.log(date4.getDay());
// get latest hours
console.log(date4.getHours())
// get latest minutes
console.log(date4.getMinutes())
// get latest seconds
console.log(date4.getSeconds())
// get latest miliseconds
console.log(date4.getMilliseconds())
// get latest total time from 1970
console.log(date4.getTime())
// date4.toLocaleString('default', {
//     weekday: "long",
//     dateStyle: "full",
//     era: "long",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
// })

console.log("Set Methods");


let date6 = new Date();

// change year to 2025
date6.setFullYear(2025);
// change month to January (0)
date6.setMonth(0);         
// change day to 15  
date6.setDate(15);         
// change hour to 10 AM   
date6.setHours(10);   
// change minutes to 25  
date6.setMinutes(25)   
// change seconds to 45
date6.setSeconds(45)
// change miliseconds to 555
date6.setMilliseconds(555)
// date6.setTime(1)  

console.log(date6); 

// console.log(date.toISOString());
// console.log(date.toJSON());