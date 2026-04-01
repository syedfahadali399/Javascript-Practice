let mydata = new String("fahad")
let data = "fahad"
let space = "   fahad    "
let num = 123
console.log(mydata);


// String Methods

// This return the string word that we choose
console.log(data[0]);
// This return an object
console.log(data.__proto__);
// This is use to find length of the string
console.log(data.length)
// This is use for uppercase the string
console.log(data.toUpperCase());
// This is use for lowercase
console.log(data.toLowerCase())
// This is use for find the string word that we given in this method
console.log(data.charAt(0));
// This is use for find the index number that we given in this method
console.log(data.indexOf("a"));
// This is use for replace the string with other string or other variable
console.log(data.replace("fahad", "ali"));
// This is use for concat the two string
console.log(data.concat(mydata));
// This is use for repeat the string base on the user chioce
console.log(data.repeat(3));
// This is use for cut the string index start from 0 and end with the user userchioce
console.log(data.substring(0, 4));
// This is use for cut the string index start from 0 and end with the user userchioce
console.log(data.slice(0,4));
// This is use for spilt the string
console.log(data.split(""));
// This return true if the given word match with the string
console.log(data.startsWith("fa"));
// This is use for uppercase the string
console.log(data.toLocaleLowerCase())
// This is use for lowercase the string
console.log(data.toLocaleUpperCase());
// This is use to convert any datatype into string
console.log(num.toString());
// This is use to remove white spaces on both side of the string
console.log(space.trim());
// This is use to remove white spaces on rigth side of the string
console.log(space.trimEnd())
// This is use to remove white spaces on left side of the string
console.log(space.trimStart());
// This return an index number that we given string in this method
console.log(data.search("ha"));
// This add the word at the start that we given to 8 index
console.log(data.padStart(8, "0"));
// This add the word at the end that we given to 8 index
console.log(data.padEnd(8, "0"));
// This return true if the sring word is avalaible in the string
console.log(data.includes("ah"));
// This return true if the sring word is avalaible in the string
console.log(data.endsWith("ad"));
// This return a word of the index number that we given in the method
console.log(data.at(2));
// This return a number from the string that we given in the method
console.log(data.lastIndexOf("h"));

console.log(data.match("aha"));
console.log(data.valueOf("ad"));
console.log(data.charCodeAt("ah"));