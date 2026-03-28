let user = {
  name: "Fahad",
  age: 19
};

// Save
localStorage.setItem("userData", JSON.stringify(user));

// Retrieve
let storedUser = JSON.parse(localStorage.getItem("userData"));
console.log(storedUser.name); // "Fahad"

localStorage.setItem("username", "fahad");
let users = localStorage.getItem("username");
console.log(users); // "fahad"