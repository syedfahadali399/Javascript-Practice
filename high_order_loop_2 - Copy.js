// filter
const filter = [1,2,3,4,5,6,7,8,9]

const check = filter.filter((num) => num > 4)

console.log(check);

// multi chaining
let array = [1,2,3,4,5,6,7,8,9,10]

let verify = array
          .map((num) => num * 10)
          .map((num) => num + 1)
          .filter((num) => num >= 40)

console.log(verify);


let arr = [1,2,3,4,5]

let checks = arr.reduce((acc, curr_val) => {
    console.log(`acc val ${acc} : curr_val ${curr_val}`);
    return acc + curr_val
}, 0)

console.log(checks);

const list = [
    {
        item: 1,
        price: 299
    },
    {
        item: 2,
        price: 399
    },
    {
        item: 3,
        price: 499
    },
    {
        item: 4,
        price: 599
    },
    {
        item: 5,
        price: 699
    }
]

let add = list.reduce((acc, item) => {
    return acc + item.price
}, 0)
//  0 tell where to start in the arr or arr of obj

console.log(add);
