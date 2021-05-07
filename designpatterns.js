//Module Pattern

var Exposer = (function () {
  var privateVariable = 10;

  var privateMethod = function () {
    console.log("Inside a private method!");
    privateVariable++;
  };

  var methodToExpose = function () {
    console.log("This is a method I want to expose!");
  };

  var otherMethodIWantToExpose = function () {
    privateMethod();
  };

  return {
    first: methodToExpose,
    second: otherMethodIWantToExpose,
  };
})();

Exposer.first(); // Output: This is a method I want to expose!
Exposer.second(); // Output: Inside a private method!
Exposer.methodToExpose; // undefined

//Observer Design Pattern

var Subject = function () {
  this.observers = [];

  return {
    subscribeObserver: function (observer) {
      this.observers.push(observer);
    },
    unsubscribeObserver: function (observer) {
      var index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    },
    notifyObserver: function (observer) {
      var index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers[index].notify(index);
      }
    },
    notifyAllObservers: function () {
      for (var i = 0; i < this.observers.length; i++) {
        this.observers[i].notify(i);
      }
    },
  };
};

var Observer = function () {
  return {
    notify: function (index) {
      console.log("Observer " + index + " is notified!");
    },
  };
};

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();

//Prototype Design Pattern in JavaScript
var TeslaModelS = function () {
  this.numWheels = 4;
  this.manufacturer = "Tesla";
  this.make = "Model S";
};

TeslaModelS.prototype.go = function () {
  // Rotate wheels
};

TeslaModelS.prototype.stop = function () {
  // Apply brake pads
};

//===============================================================================

//https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns

// JavaScript Supports First-class Functions
// you can pass functions as parameters to other functions just like you would any other variable.

// https://jsfiddle.net/vtLwydg3/

// ways to create object in javascript

var instance = {};

var instance = Object.create(Object.prototype);

var instance = new Object();
