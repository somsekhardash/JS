//https://youtu.be/bC-ilFHSt4s?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD
//https://www.youtube.com/watch?v=qikxEIxsXco

// mecanisum for containing state
// whenever a function access a variable outside of its scope i.e the parent function.

//Example 1

function init() {
  const name = "Somsekhar Dash";
  function getFirstName() {
    return `My name is ${name}`;
  }
  return getFirstName();
}
console.log(init());

//Example 2
//execution context, Global context

function init1() {
  const name = "Somsekhar Dash";
  function getFirstName() {
    return `my name is ${name}`;
  }
  return getFirstName;
}

var temp1 = init1();
console.log(temp1());
console.log(init1()());

// Example 3
const add = (a) => {
  return (b) => {
    return a + b;
  };
};

const add1 = (a) => (b) => a + b;
console.log(add(1)(2));
console.log(add1(1)(2));

// Example 4

// when function is bind with the lexical scope of the parent

const createStream = (logger) => {
  return (message) => {
    logger(message.toUpperCase());
  };
};

const logger = (message) => {
  console.log(message);
};

const insideFun = createStream(logger);
insideFun("sadas");

// Example 4.2

const createNewStream = (Scanner) => {
  const som = [{ 0: "0" }, { 1: "1" }, { 2: "2" }, { 3: "3" }];
  return (number) => {
    return Scanner(som[number]);
  };
};

const logger1 = (message) => {
  return Object.values(message)[0];
};

const insideFun1 = createNewStream(logger1);
console.log(insideFun1(3));

// partial application

// Partial application allows us to send one argument once but the other arguments leter
// amount of time.

function multiple(a, b, c) {
  return a * b * c;
}
const multiple5 = multiple.bind(null, 5);
multiple5(4, 10);

// here we are using 1st parameter initially the other arguments leter based on need.
