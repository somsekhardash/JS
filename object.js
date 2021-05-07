// Different ways to create objects in javascript.

// 1. Object Literal

var user = {
  fname: "som",
  lname: "dash",
  fullName: function () {
    return `my name is ${this.fname} ${this.lname}-`;
  },
};

console.log(user);
console.log(user.fullName());

var user1 = {
  fname: "som",
  lname: "dash",
  fullName() {
    return `my name is ${this.fname} ${this.lname}-`;
  },
};

console.log(user1);
console.log(user1.fullName());

var user2 = {
  fname: "som",
  lname: "dash",
  fullName: () => {
    return `my name is ${this.fname} ${this.lname}`;
  },
};

console.log(user2);
console.log(user2.fullName());
//due to arrow function its undefined

// 2. Using Object.create

//Object.create(prototype, propertiesObject);

var testX = Object.create(user);
console.log(testX);
console.log(testX.fullName());
// object properties are there in the prototype so textX is coming empty

var testXY = Object.create(user, {
  fname: { value: "gopendra" },
});
console.log(testXY);
console.log(testXY.fullName());

// 3. Function to create object
var Person = function (firstName, lastName) {
  this.fname = firstName;
  this.lname = lastName;
  this.fullName = () => {
    return this.fname + this.lname;
  };
};

var som = new Person("somskehar", "dash");
console.log(som);
console.log(som.fullName());

// if we want ot add some functionality to it wihout changing the original code we can do using Prototype
// Prototype will the provided to the function and the objects generated from it are ogin to get it by __proto__

Person.prototype.getUltaName = function () {
  return this.lname + this.fname;
};
console.log(som);
console.log(som.getUltaName());

// with this approach we get all the push pop and other facility in the array and objects.
// with this we can add our own function to Array Object  os that it can be found in the later objects created from it.

Array.prototype.nextLength = function () {
  return this.length + 1;
};
var newArray = new Array(1, 2, 3, 4);
var dash = [1, 2];
console.log(dash.nextLength(), newArray.nextLength());

// 4. Factory Function

function newUser() {
  return {
    fname: "som",
    lname: "dash",
    fullName() {
      return this.fname + this.lname;
    },
  };
}

var newSom = newUser();
newSom.fname = "somsekhar";
console.log(newSom);

// 4. Class

class User {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  fullName() {
    return this.fname + this.lname;
  }
}

var som = new User("somskehar", "dash");
console.log(som);

//--------------------------------------------------------

// destructor object

const regularPerson = {
  firstName: "Bill",
  lastName: "Wilson",
  spouse: {
    firstName: "Phil",
    lastName: "Wilson",
  },
};

const lordify = ({ spouse: { firstName } }) => {
  console.log(`${firstName} of Canterbury`);
};

lordify(regularPerson); // Phil of Canterbury

//Object Literal Enhancement

const username = "Tallac";
const elevation = 9738;
const sound = "boom";
const funHike = { username, elevation };
console.log(funHike); // {name: "Tallac", elevation: 9738}

// Old
var skier = {
  name: username,
  sound: sound,
  powderYell: function () {
    var yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed: function (mph) {
    this.speed = mph;
    console.log("speed:", mph);
  },
};

console.log(skier);

// New
const newSkier = {
  username,
  sound,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.speed = mph;
    console.log("speed:", mph);
  },
};

console.log(newSkier);

const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};
const dinner = "mac and cheese";
const backpackingMeals = {
  ...morning,
  dinner,
};
console.log(backpackingMeals);
