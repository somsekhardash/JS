// Function Declarations
function sayHello() {
  console.log("Hello world");
}

// Function Expressions
sayNowHello = () => {
  console.log("Hello world");
};

//default parameter
function logActivity(name = "Shane McConley", activity = "skiing") {
  console.log(`${name} loves ${activity}`);
}

// function return object
const person = (firstName, lastName) => ({
  first: firstName,
  last: lastName,
});
console.log(person("Flab", "Hanson"));

sayHello; // fun reference
sayHello(); //function calling
sayNowHello();

/*  context
    Global Execution Context  - i.e Windows in browser but not in Nodejs
    Execution Context - All the small functions - Variable Object | Scope Chain | This KeyWord
    Hoisting Rules-  1. Functions declarations are scanned and made available 
                        2. Variable declarations are scanned and made undefined
  */
console.log("----------------------");

/* Example 1 - Variable Object - hoisting
  function calling 1st then declaration so no error */
sayMyName("Som");
function sayMyName(name) {
  var syntax = `my name is ${name}`;
  console.log(syntax);
}
console.log("----------------------");

/* Example 2
   this will give error as this will */
console.log(sayMyNewName);
try {
  sayMyNewName("Som"); //-> will give error
} catch (e) {
  console.log(e);
}
var sayMyNewName = (name) => {
  var syntax = `my name is ${name}`;
  console.log(syntax);
};
console.log("----------------------");

/* Example 3
  this will not give error but will give undefined */
console.log(fullName);
var fullName = "som";
var sayName = () => {
  var fullName = "Somsekhar dash";
  console.log(fullName);
};
sayName();
console.log(fullName);

/* Example 4 - Scope Chain */
var fullName = "Som";
console.log(`Global- ${fullName}`);
var sayName = () => {
  var fullName = "Somsekhar dash";
  console.log(`sayName- ${fullName}`);
  var sayMyNewName = () => {
    console.log(`sayMyNewName- ${fullName}`);
  };
  sayMyNewName();
};
sayName();

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
