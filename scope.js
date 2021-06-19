//Problem

var topic = "JavaScript";
if (topic) {
  var topic = "React";
  console.log("block", topic); // block React
}
console.log("global", topic); // global React

var div,
  container = document.getElementById("container");
for (var i = 0; i < 5; i++) {
  div = document.createElement("div");
  div.onclick = function () {
    alert("This is box #" + i);
  };
  container.appendChild(div);
}

//solution

var topic = "JavaScript";
if (topic) {
  let topic = "React";
  console.log("block", topic); // React
}
console.log("global", topic); // JavaScript

const container = document.getElementById("container");
let div;
for (let i = 0; i < 5; i++) {
  div = document.createElement("div");
  div.onclick = function () {
    alert("This is box #: " + i);
  };
  container.appendChild(div);
}

/* 
https://youtu.be/8zKuNo4ay8E
event loop
- JS is a syn single thread language
- Global execution context and added to the queue 
- Execution context

- callback queue
	- event loop 
- call stack 
- microtask queue - Promise , mutation observe

- starvation in callback */

function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    console.log(c);
    return function printName() {
      var c = "c";
      return "Andrei Neagoie";
    };
  };
}

sayMyName()()();

function findName() {
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Andrei Neagoie";
}

function sayMyName() {
  var a = "a";
  return findName();
}

sayMyName();

between = function (lm, hl) {
  return this >= lm && this <= hm;
};
