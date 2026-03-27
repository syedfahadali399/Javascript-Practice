// global scope behave differnet in code enivorment and browser by inspect


// Global Scope
var c = 300
{
    // Block Scope
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
console.log(c);


function hello() {
    const name = "fahad"

    function show() {
        const website = "youtube"
        console.log(name);
    }
    // console.log(website); not allowed
    
    show()
}
hello()

console.log(addOne(5));
function addOne(value) {
    return value + 1
}

// console.log(addTwo(6)); not allowed
let addTwo = function(val) {
    return val + 2
}
console.log(addTwo(6));
