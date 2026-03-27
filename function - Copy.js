function addTwoNumber(num1, num2) {
    let result = num1 + num2
    return result
}
let show = addTwoNumber(5,5)
console.log(show);
// 10

function subTwonumber(num1 = 5, num2 = 9) {
    return num2 - num1
}
let result = subTwonumber()
console.log(result);
// 4

function mulTwoNumber(num1 = 10, num2 = 10) {
    return num1 * num2
}
let showr = mulTwoNumber(5, 5)
console.log(showr);
// 25

function divTwoNumber(num1, ...num2) {
    let result = num1 + num2
    return result
}
let calculate = divTwoNumber(500,400,300,200,100)
console.log(calculate);
// 500400,300,200,100

let user = {
    name: "fahad",
    age: 18
}
function handleObj(objects) {
    return `My Name is ${objects.name} and my age is ${objects.age}`
}
let prints = handleObj(user)
console.log(prints);
// My Name is fahad and my age is 18

let arr = [100,200,300,400]
function printarr(array) {
    return array[1]
}
let printarrs = printarr(arr)
console.log(printarrs);
// 200