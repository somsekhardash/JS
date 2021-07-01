// what is Higher Order Function

// its a function that does one of two things, either take one or more function as arg
// or return a function as result.

const HOF = () => () => 5;
HOF()();

// Create a function that will change other functions

function sum(...arg) {
  return arg.reduce((sum, val) => {
    return (sum = sum + val);
  }, 0);
}

function informativeFunciton(fun) {
  return function (...args) {
    console.log(`the arguments are`, args);
    const res = fun.apply(this, args);
    console.log(`the result is`, res);
    return res;
  };
}

console.log(informativeFunciton(sum)(4, 5, 6, 8));

// write your own reducer fuction

const arr = [1, 2, 3, 4];

Array.prototype.newReduce = function (fun, init) {
  let result = init;
  let arr = this;
  arr.forEach(function (item) {
    result = fun.call(this, result, item);
  });
  return result;
};

const som = arr.newReduce((a, b) => a + b, 5);
const pre = arr.reduce((a, b) => a + b, 5);

console.log(som, pre);

// write the filter function

const list = [34, 12, 65, 19, 24, 22, 6];

list.filter(between(10, 25)); // [12, 19, 24, 22]

function between(min, max) {
  console.log(min, max);
  return function (element) {
    return min < element && element < max;
  };
}

console.log(list.filter(between(12, 43)));

// Write your own Promise all function

function runAll([first, ...rest]) {
  if (!first) return Promise.resolve([]);
  return Promise.resolve(first).then((firstResult) => {
    return runAll(rest).then((res) => {
      return [firstResult, ...res];
    });
  });
}

runAll([p1, p2, p3]).then((res) => {
  console.log(res);
});

function add(...args1) {
  const sum = args1.reduce((acc, node) => {
    return (acc = acc + node);
  }, 0);
  return function (...args2) {
    if (!args2.length) return sum;
    return add(...args1, ...args2);
  };
}

console.log(add(1, 2, 3, 4)());
console.log(add(1)(2)(3)(4)());
