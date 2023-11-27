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


// ====================

QSR HealthCare 
11. How to avoid cashing in the browser(ans=meta cache)
12. What is responsive web design ?
13. Cross browser compatibility?
14. What is cross domain compatibility?-> Jsonp and window.postmessage
15. What is a differed object? 
16. What is a promise object?
17. what is the advantage using differed and promise?
18. page optimization ?
19. what is the difference between differed and promise object?


Innominds
20. what is Event Bubbling in JavaScript?
21. what is Block element n Inline element?
22. what is prototype in javascript ?
23. how to create class in javascript? create an object of that class ?
24. what is new in html5 except attributes? local storage and web shocked
25. add(2)(3) {related to closure
26. what is the latest safari version in mac?
27. create an plugin to add two number 
28. using css make an font to rotate while loading
29. why promises() is used?
30. select all the elements having ID which ends with “xxx”   {[id$=“XXX"]}
31. url [we can put #XXX and based on that content has to b displayed inside a para]
xx. remove all the digits present inside it with space 	//slice().. 
32. what is doctype ? & why this is used?
33. call() apply().. ?
34. diference between == and === ?


QSR HealthCare Round 2 
35. function overloading and function overriding is there in script? overloading is not possible but overriding is there 
36. how to declare an global variable in javascript 
37. types in Ajax 
38. inheritance in javascript 
39. promotype in javascript and its advantages 
40. doc.ready vs win.load
41. strict mode and why used
42. why constructor is used and how ?
   

Extras    
43. window.postmessage
44. get and post in javascript
45. javascript is sync or async


Angular JS
What is dependency injection in angular js?
How can we pass one module into another?(ans=as an attribute)
What is Deractive and how to create it?
How to do calls in Angualr and syntex of $http


Fireye --> standerds


Symphony Teleca Questions
Jquery animate runs on primary thread or secondary thread?
How ajax works when you know javascript is single threaded application
How do you have persistent data when the user interacting with some input fields and then he closes the browser
How do you display data in tabular format which has groupings in html5? Ans - flex layout
How to create private, public and protected members in javascript
What is javascript navigator.
What features do you use in html5 and css3
What is closure?
Create a closure which can access value of a variable from the inner function
What is web workers. Have you worked on them
Why do you prototype in javascript
What are primitive data types in javascript
What is 'use strict'
What will happen if you pass 0 as second parameter to the setTimeout function Ans: http://stackoverflow.com/questions/6998330/how-to-do-threading-in-javascript http://jsfiddle.net/C2YBE/31/
Why do you use apply and call ——  &Bind 
Event Bubbling and Propogation. Write code for both
 
Inmobi
1. What are HTML5 semantics
2. What happens if you don't use doctype. What doctypes being used 
3. What is quirks mode 
4. Different html5 tags
5. Html5 api's
6. Tags deprecated in html5
7. Local storage, session storage, web sql
10.  Multi Channel Development
11.  CSS Media Queries
12.  Day to Day activity
13. What is closure and example
14. Commonly used jquery functions
15. Differences between jquery and native javascript, advantages
16. What are json
17. What is singleton pattern and why they are called singletons
18. How do you create a object

7. New selectors in CSS3
8. HOw to center a div wihtout margin:0 auto
9: how to center a image without text-align: center
10: CSS3 features which are being used - important, most frequently asked
11. Difference between float:left and display:inline-block
12. Box model
13. Sibling Selector, Child Selector
14. #x.y, #x .y 



Ness Tech

Can prototypes be created from a object
Closures
How to find second largest element in an array ??
what is call bind and apply ??
Put in java script 
http get and post difference vs ajax get() post() difference.
block inline-block inline difference




Cognizant
1.	is in jquery // how to check element is hidden or not using script 
2.	how to get all the keys from an object 
3.	how to merge 2 object 
4.	array functions i.e filter and all not using _js .. same are vailable in js 
5.	closure 
6.	how to apply border radious in IE8 // filter 
7.	splice vs slice 
8.	parent div without using parent // closest in jquery 
9.	css frameset example and transactin example 
10. 	css vertical center and table cell
11.	AMD js or require js and why 
12. 	what is namespace and why 
13. 	angular  vs polymer 
14. 	on form is there how to submit it 
15. 	how u r handling null empty or fasle option 
16.	what is isolated scope  


CDK Globals

develope one normal page with menu. on mouse over submenu should come. on mobile view it should display in sanwitch style. all have to b in css only.


//=======================================