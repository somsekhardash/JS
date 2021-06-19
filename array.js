// How to create Array
var number = [1, 2, 3, 4, 5];
var numbers = new Array(1, 2, 3, 4, 5);
console.log(number, numbers);
console.log(Array.from("som"));

console.log("--------------------");

/* Example - every*/
const isEven = (num) => num % 2 == 0;
const res = [2, 4].every(isEven);
console.log(res);

console.log("--------------------");
/* Example - fill*/
const arr1 = [1, 2, 3, 4];
console.log(arr1.fill(1));

console.log("--------------------");

/* Example splice / slice 
    start pos- included
    last pos- excluded */

const arr2 = [1, 2, 3, 4, 5];
arr2.slice(1, 3);
console.log(arr2.slice(1, 3));
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.splice(1, 3));
console.log(arr3);
console.log(arr3.splice(0, 3, "som")); // it changes the array
console.log(arr3);

// get the last element of an array

const peaks = ["Tarlac", "Alston", "Rose"];
const [last] = peaks.reverse();
console.log(last); // Rose
console.log(peaks.join(", "));

// How to check if its an object or an Array  as typeof both are 'object'

console.log(Array.isArray(arr2));
