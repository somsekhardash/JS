var number = [1, 2, 3, 4, 5, 6];
var numbers = new Array(1, 2, 3, 4, 5);
console.log(number, numbers);
console.log(Array.from("som"));

console.log("--------------------");
/* Example */
const isEven = (num) => num % 2 == 0;
const res = [2, 4].every(isEven);
console.log(res);

console.log("--------------------");
/* Example */
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

console.log(arr2.splice(1, 4, "som")); // it changes the array
console.log(arr2);
