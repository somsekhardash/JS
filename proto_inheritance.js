// Object    -  Array & Function

// Object is the parent of all. But
// Array and Function Object inherit all the property from the parent i.e Object.

// borrow function between Objects
const admin = {
  name: "admin",
  id: 1,
  create() {
    return `${this.name} can create`;
  },
  edit() {
    return `${this.name} can edit`;
  },
  delete() {
    return `${this.name} can delete`;
  },
  read() {
    return `${this.name} can read`;
  },
};

const editor = {
  name: "editor",
  id: 30,
};

husbandSing = wife.action.bind(husband);
// we can do the same thing using inharitance

const admin = {
  name: "priti",
  id: 1,
  create() {
    return `${this.name} can create`;
  },
  edit() {
    return `${this.name} can edit`;
  },
  delete() {
    return `${this.name} can delete`;
  },
  read() {
    return `${this.name} can read`;
  },
};

const editor = {
  name: "som",
  id: 30,
};

editor.__proto__ = admin;

console.log(editor.edit());

// if we want to know how husband is created
// we can check using

console.log(admin.isPrototypeOf(editor));

/*****************************************************************/

// example of Prototype inheritance

function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.sayMyName = function () {
  return `my name is ${this.name}`;
};

var som = new Human("som", 12);

console.log(som instanceof Human);

// extend the functionality of Date object, create a last date methd that will give the last year

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

let som = new Date("1900-10-10").lastYear();

console.log(som);

// map function to change the behaiour

let huhu = [1, 2, 3, 4];

Array.prototype.map = function () {
  let result = [];
  console.log(this);
  this.forEach((item) => {
    console.log(item);
    result.push(`${item} *`);
  });
  return result;
};

console.log(huhu.map());
