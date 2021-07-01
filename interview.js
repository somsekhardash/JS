// extend the functionality of Date object, create a last date methd that will give the last year
// inharitance
Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
  };
  
let som = new Date("1900-10-10").lastYear();

console.log(som);

/************************************************** */

function checkMe() {
  return new Promise((resolve, reject)=> {
      setTimeout(()=> {
          reject("Som"); 
      }, 2000)
  }) 
} 

checkMe().then((res)=> {
  console.log(res);
}).catch(()=> {
  console.log(1);
}).then(()=> {
  console.log(2);
}).catch(()=> {
  console.log(3);
}).then(()=> {
  console.log(4);
}).catch(()=> {
  console.log(5);
})

/******************************************************************/

// Problem

const first = () => {
  return "i m 1st";
};
const second = () => {
  setTimeout(() => {
    resolve("i m 2nd");
  }, 1000);
};
const third = () => {
  return "i m 3rd";
};

const callMe = async () => {
  console.log(first());
  console.log(second());
  console.log(third());
};

callme();

//===========//

const first = () => {
  return "i m 1st";
};
const second = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i m 2nd");
    }, 1000);
  });
};
const third = () => {
  return "i m 3rd";
};

const callMe = async () => {
  console.log(first());
  console.log(await second());
  console.log(third());
};

callme();


/******************************************************************/

// Handling Multiple JavaScript Promises Even if Some Fail

const p1 = new Promise((resolve, reject) => {
    resolve("p1");
  });
  
  const p2 = new Promise((resolve, reject) => {
    reject("p2");
  }).catch((err) => {
    return "error";
  });
  
  const p3 = new Promise((resolve, reject) => {
    resolve("p3");
  });
  
  Promise.all([p1, p2, p3]).then((res) => {
    console.log(res);
  });
  
  // Write your own Promise all function
  
  function runAll([first, ...rest]) {
    if (!first) return Promise.resolve([]);
    return Promise.resolve(first).then((firstResult) => {
      return runAll(rest).then((res) => {
        return [firstResult, ...res];
      });
    });
  }
  
  runAll([p1, p2, p3]).then((res) => {
    console.log(res);
  });
  
  
/******************************************************************/


// write your own reducer fuction

// Array:reducer
const arr = [1,2,3,4];

Array.prototype.newReduce = function(fun, init){
    let result = init;
    let arr = this;
    arr.forEach(function(item, index){
        result = fun.call(this, result , arr[index]);
    });
   return result;
}

const som = arr.newReduce((a,b)=> a+b, 5);
const pre = arr.reduce((a,b)=> a+b, 5);

console.log(som, pre);


/******************************************************************/

// Array:filter
const list = [34,12,65,19, 24, 22, 6];

list.filter(between(10, 25)); // [12, 19, 24, 22]

function between(min,max) {
    console.log(min,max);
    return function(element){
        return min < element  && element < max
    }
}

console.log(list.filter(between(12,43)));


/******************************************************************/


const list = [];

[[a1, a2, a3], [b1, b2, b3]]

a1 + a2 + a3 = target;
b1 + b2 + a3 = target;

const threeSum = (list, target) => {
	
}


// [[a1, a2, a3], [b1, b2, b3]]

// a1 + a2 + a3 = target;
// b1 + b2 + a3 = target;

const threeSum = (list, target) => {
    let result = [];
	for(i=0; i< list.length; i++) {
        for(j=i+1; j< list.length; j++) {
            for(k=i+2; k< list.length; k++) {
                if(list[i]+list[j]+list[k] == target) {
                    result.push([list[i],list[j],list[k]]);
                }
            }
        }
    }
}

const threeSum = (list, target) => {
    let result = [];
    let obj = {};
	for(i=0; i< list.length; i++) {
        for(j=i+1; j< list.length; j++) {
            if(obj[target - list[i]+list[j]]) {
                var som = new Map([list[i],list[j],obj[list[i]+list[j]]]);
                result = [...result, som];
            } 
        }
    }
}


threeSum(list, 10);



// closure 

sum(1)(2)(3)
sum(1,2,3)


// borrow function between Objects
















// analytics

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










const first = () => {
  return "i m 1st";
};
const second = () => {
  setTimeout(() => {
    return "i m 2nd";
  }, 1000);
};
const third = () => {
  return "i m 3rd";
};

const callMe = () => {
  console.log(first());
  console.log(second());
  console.log(third());
};

callme();
