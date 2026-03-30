let sym1 = Symbol("mykey1")


let obj = {
    name: "fahad",
    "full_name": "syed fahad ali",
    age: 19,
    email: "syedf8707@gmail.com",
    country: "pakistan",
    uni: "iqra university",
    day: ["monday", "saturday", "friday"],
    obj2: {
        company: "microsoft",
        "type": "software enginner",
        year: 3
    },
    [sym1]: "mykey",
    run: function() {
        console.log(`Hello ${this.name}`)
    }
}

// access name
console.log(obj.name);
// access age
console.log(obj["age"]);
// access full name
console.log(obj["full_name"]);
// access symbol this is defined seperate but use in obj 
console.log(obj[sym1]);
// to access array in obj
console.log(obj.day);
// to access obj in obj
console.log(obj.obj2.company);
// to access obj in obj2 for type
console.log(obj.obj2["type"]);
// to run function inside obj
console.log(obj.run());
// to change the value of eamil
obj.email = "fahadalisyed543@gmail.com"
console.log(obj);
// to freeze the obj then its value does not change its value is lock
Object.freeze(obj)
// the value of age is not change bcz of freeze method
obj.age = 20
console.log(obj);

// know the getter and setter
const myCat = {
  _name: 'Dottie',
  get name() {
    return this._name;  
  },
  set name(newName) {
    this._name = newName;  
  }
};

// Reference invokes the getter
console.log(myCat.name);

// Assignment invokes the setter
myCat.name = 'Yankee';

// see the normal func and arrow func
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },  
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  },
};

engine.start('noisily');
engine.sputter();

// A factory function that accepts 'name', 
// 'age', and 'breed' parameters to return 
// a customized dog object. 
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');  
    }
  };
};

