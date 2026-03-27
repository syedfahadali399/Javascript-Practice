// Five type of Promise

// 1
let promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // it run first
        console.log("Async is completed");
        // then this
        resolve()
    }, 3000)
})

promiseOne.then(function() {
    console.log("promise 1 consumed");
})

// 2
new Promise(function(resolve, reject) {
    setTimeout(function() {
        // it run first
        console.log("Async 2 is completed");
        // then this
        resolve()
    }, 4000)
}).then(function() {
    console.log("promise 2 consumed");
})

// 3
let promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({Promise: 3,username: "email", age: 19})
    }, 5000)
})

promiseThree.then(function(user) {
    console.log(user);
})

// 4
let promiseFour = new Promise(function(resolve,reject) {
    setTimeout(() => {
        let error = false
        if(!error) {
            resolve({Promise: 4,username: "syed fahad ali", age: 19})
        } else {
            reject("ERROR Something wrong")
        }
    }, 6000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("the promise is either resolve or rejected");
})

// 5
let promiseFive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        if(!error) {
            resolve({Promise: 5,username: "javascript", age: 19})
        } else {
            reject("ERROR js Something wrong")
        }
    }, 7000)
})

async function consumepromiseFive() {
    try {
      // not allowed
      // await promiseFive()
      const wait = await promiseFive
      console.log(wait);   
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive()

async function getAllData() {
    try {
        let response = await fetch('https://dummyjson.com/test')
        let wait = await response.json()
    } catch(error) {
        console.log(error);
    }
}

getAllData()

async function getAllData2() {
    setTimeout(() => {
        fetch('https://dummyjson.com/test') 
        .then((respone) => {
            return respone.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, 8000)
}

getAllData2()

async function getAllData3() {
    
    fetch('https://dummyjson.com/test') 
    .then((respone) => {
        return respone.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
}

getAllData3()
