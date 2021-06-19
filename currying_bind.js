// why we use curry functions

// we use curry to create differnt utility function from one function

// create a multiple functions out of the multiplay function

function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

// Problem

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't

// solution

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

// create multiplication function which can be used for multiplication of individual number also

const multiply = (a) => (b) => a * b;

multiply2 = multiply(2);
multiply2(3);
