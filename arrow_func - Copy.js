let obj = {
    name: "fahad",
    age: 18,
    show: function() {
        console.log(`My name is ${this.name}`);
        // it print the current context
        // console.log(this);
        
    }
}

obj.show()
obj.name = "syed fahad"
obj.show()
// it show empty bcz there was no varlable and other thing are define in code env
// console.log(this);

// arrow func example
let addTwo = () => {
    return 5 + 5
}
console.log(addTwo());

// arrow function with return type
let addThree = (num1 , num2) => {
    return num1 + num2
}
console.log(addThree(10,10));

// if we do not use curley braces then we do not use return key word
let addFour = (num1, num2) => num1 + num2
console.log(addFour(10,30));

// if we do not use curley braces then we do not use return key word
let addFive = (num1, num2) => (num1 + num2)
console.log(addFive(10, 50));

// IIFE

// this is named iife
(function done() {
    console.log(`Checked`);
})();
// ; this is mandotory to use when we use iife function

// this is simple iife
(() => {
    console.log("done");
})();

((name) => {
    console.log(`done ${name}`);
})("fahad");