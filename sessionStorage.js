let user = {
  name: "Fahad",
  age: 19
};

// Save
sessionStorage.setItem("userData", JSON.stringify(user));

// Retrieve
let storedUser = JSON.parse(localStorage.getItem("userData"));
console.log(storedUser.name); // "Fahad"

sessionStorage.setItem("username", "fahad");
let users = sessionStorage.getItem("username");
console.log(users); // "fahad"