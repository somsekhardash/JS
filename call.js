// function/method borrowing
var user = {
  fname: "som",
  lname: "dash",
  fullName: function () {
    return `my name is ${this.fname} ${this.lname}`;
  },
};

var user2 = {
  fname: "ramesh",
  lname: "babu",
};

// bind always return referance of the function
console.log(user.fullName.bind(user2)());
var user2FullName = user.fullName.bind(user2);
console.log(user2FullName());

// call will directly call it instand of providing any referance
