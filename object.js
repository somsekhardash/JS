var user = {
  fname: "som",
  lname: "dash",
  fullName: function () {
    return `my name is ${this.fname} ${this.lname}`;
  },
};

var user1 = {
  fname: "som",
  lname: "dash",
  fullName: () => {
    return `my name is ${this.fname} ${this.lname}`;
  },
};

console.log(user.fullName(), user1.fullName());
console.table(user);

var testX = Object.create(user);
console.log(testX.fname);

var testXY = Object.create(user, {
  fname: { value: "gopendra" },
});
console.log(testXY.fname);

console.log("-----------");
//Examples - function to create object
var Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = () => {
    return this.firstName + this.lastName;
  };
};

var som = new Person("somskehar", "dash"); // this is bind beacuse of the new keyword
var mrx = new Person("mr", "x");

console.table(som.fullName());
// if we want ot add some functionality to it wihout changing the original code we can do using Prototype
// Prototype will the provided to the function and the objects generated from it are ogin to get it by __proto__

Person.prototype.getUltaName = function () {
  return this.lastName + this.firstName;
};

console.log(som.getUltaName(), mrx.getUltaName());

// with this approch we get all the push pop and other facility in the array and objects.
// with this we can add our own function to Array Object  os that it can be found in the later objects created from it.

Array.prototype.nextLength = function () {
  return this.length + 1;
};

var newArray = new Array(1, 2, 3, 4);
var dash = [1, 2];
console.log(dash.nextLength(), newArray.nextLength());
