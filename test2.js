const data = {
  firstName: "fName",
  lastName: "lName",
  address: {
    lane: "lane1",
    house: "house1",
    pin: "*****",
  },
  member: [
    {
      firstName: "fName",
      lastName: "lName",
      age: 32,
    },
    {
      firstName: "SfName",
      lastName: "SlName",
      age: 30,
    },
    {
      firstName: "MsName",
      lastName: "MlName",
      age: 30,
    },
  ],
  data: null,
};

function getData(data, qString) {
  let keys = qString.split(".");
  let holder = data;
  keys.forEach((key) => {
    holder = holder[key];
  });
  return holder;
}

console.log(getData(data, "firstName"));
console.log(getData(data, "address.lane"));
console.log(getData(data, "address.house"));
console.log(getData(data, "dash"));
console.log(getData(data, "member.1.age"));
