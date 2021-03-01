function sayHello() {
  console.log("Hello world");
}

//functions in variable
sayNowHello = () => {
  console.log("Hello world");
};

sayHello; // fun referance
sayHello(); //function calling
sayNowHello();

/* context
     Global Context  - i.e Windows in browser but not in Nodejs
     Execution Context - All the small functions - Variable Object | Scope Chain | This KeyWord
            (Hoisting)Rules-  1. Functions declarations are scanned and made available 
                    2. Variable declearations are scanned and made undefined
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
// sayMyNewName("Som"); //-> will give error
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
var fullName = "som";
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
