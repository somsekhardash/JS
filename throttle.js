const apiCall = () => {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
};

const apiCallFunction = () => {
  apiCall()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// document.addEventListener("click", apiCallFunction);  will can't do this as

// On click on the document we will have apicall multiple time. Which is not give good performance.
// How to stop this we can have throttle or debounce function.

// const throttleFunction = (fun, limit) => {
//     let timer = undefined;
//     return function () {
//         if(timer) return;
//         timer = setTimeout(() => {
//             fun();
//             timer = undefined;
//         }, limit);
//     }
// }

const debounceFunction = (fun, limit) => {
  let timer = undefined;
  return function () {
    if (timer) {
      timer = undefined;
      return;
    }
    timer = setTimeout(() => {
      fun();
    }, limit);
  };
};

document.addEventListener("click", debounceFunction(apiCallFunction, 1000));

// what is a higher order function
// how to implement the promise ALL without promise all
// reduce without reduce
// throttling
// memorize create in js
// deffer vs async

// how to implement the promise ALL without promise all

// Promise.all = function promiseAllRecursive(values) {
//     // Base case.
//     if (values.length === 0) {
//         return Promise.resolve([]);
//     }

//     const [first, ...rest] = values;

//     // Calling Promise.resolve on the first value because it could
//     // be either a Promise or an actual value.
//     return Promise.resolve(first).then(firstResult => {
//         return promiseAllRecursive(rest).then(restResults => {
//             return [firstResult, ...restResults];
//         });
//     });
// }

// function fact(num){
//     if(!num) return 1;
//     while(num > 0){
//         return num*fact(num-1);
//     }
// }

// console.log(fact(2))

// function memorise(func){
//     let obj = {};
//     return function(arg){
//         console.log(arg);
//         if(obj[arg]) return obj[arg];
//         obj[arg]=func.call(this, arg);
//         return obj[arg];
//     }
// }

// const memoFact = memorise(fact);
// const ss = memoFact(5);
// console.log(ss);

const data = [1, 2, 3, 4, 5, 6];

var res = data.reduce((sum, cV) => {
  sum = sum + cV;
  return sum;
}, 0);

console.log(res);

// function myReduce(data) {
//     let res = 0;
//     return function(){
//         data.forEach((item)=>{
//             res = res + item
//         });
//     }
// }

Array.prototype.myReduce = function (fun) {
  console.log(this);
  let res = 0;
  this.forEach((data) => {
    fun.bind(data);
  });
  return res;
};

let temp = 0;
data.myReduce((sum, cV) => {});

if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, "reduce", {
    value: function (callback /*, initialValue*/) {
      if (this === null) {
        throw new TypeError(
          "Array.prototype.reduce " + "called on null or undefined"
        );
      }
      if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // Steps 3, 4, 5, 6, 7
      var k = 0;
      var value;

      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++;
        }

        // 3. If len is 0 and initialValue is not present,
        //    throw a TypeError exception.
        if (k >= len) {
          throw new TypeError(
            "Reduce of empty array " + "with no initial value"
          );
        }
        value = o[k++];
      }

      // 8. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kPresent be ? HasProperty(O, Pk).
        // c. If kPresent is true, then
        //    i.  Let kValue be ? Get(O, Pk).
        //    ii. Let accumulator be ? Call(
        //          callbackfn, undefined,
        //          « accumulator, kValue, k, O »).
        if (k in o) {
          value = callback(value, o[k], k, o);
        }

        // d. Increase k by 1.
        k++;
      }

      // 9. Return accumulator.
      return value;
    },
  });
}
