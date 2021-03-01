// for all regular function call this points to windows
var user = {
  fname: "som",
  lname: "dash",
  fullName: function () {
    console.log(`this in fullName`, this);
    function moNaaKn() {
      console.log(`this in moNakn`, this);
    }
    moNaaKn();
  },
};
console.log(`normal`, this);
user.fullName();
