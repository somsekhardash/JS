// ============================================================================================================================

//https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns

// JavaScript Supports First-class Functions

function sum(a, b, cb) {
  return cb(a + b);
}

var som = sum(5, 10, (res) => {
  return `the result is ${res}`;
});

console.log(som);
