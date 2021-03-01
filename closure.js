//https://youtu.be/bC-ilFHSt4s?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD
//https://www.youtube.com/watch?v=qikxEIxsXco

function init() {
  const name = "somsekhardash";
  function getFirstName() {
    return `my name is ${name}`;
  }
  return getFirstName();
}
console.log(init());

//execution context, Global context

function init1() {
  const name = "somsekhardash";
  function getFirstName() {
    return `my name is ${name}`;
  }
  return getFirstName;
}

var temp1 = init1();
console.log(temp1());
console.log(init1()());

const add = (a) => {
  return (b) => {
    return a + b;
  };
};

const add1 = (a) => (b) => a + b;
console.log(add(1)(2));
console.log(add1(1)(2));

// when function is bind with the lexical scope of the parent
