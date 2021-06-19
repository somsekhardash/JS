// call apply bind

// function/method borrowing
var user = {
  fname: "som",
  lname: "dash",
  fullName: function (str, str1) {
    return `${str} ${this.fname} ${this.lname} ${str1}`;
  },
};

var user2 = {
  fname: "ramesh",
  lname: "babu",
};

// bind always return reference of the function
console.log(user.fullName.bind(user2, "my name is ", ".")());
var user2FullName = user.fullName.bind(user2);
console.log(user2FullName());

// call will directly call it instead of providing any reference
console.log(user.fullName.call(user2, "is you name is", "?"));
console.log(user.fullName.apply(user2, ["is you name is", "?"]));
