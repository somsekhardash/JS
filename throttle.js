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


function debounceFunction(callback, delay = 1000) {
  var time;

  return (...args) => {
    clearTimeout(time);
    time = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

document.addEventListener("click", debounceFunction(apiCallFunction, 1000));


function throttleFunction(callback, delay = 1000) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}









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



const array = [123,232,442];

Array.prototype.myReduce = function(fun, init) {
    this.forEach((item) => {
        init = fun.call(this, init, item)
    });
    
    return init;
};

const check = array.myReduce((acc, node) => {
    acc = acc+node;
    return acc;
}, 0) 








// https://www.syncfusion.com/blogs/post/javascript-debounce-vs-throttle.aspx