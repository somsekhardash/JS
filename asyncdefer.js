// write your own reducer fuction

const arr = [1, 2, 3, 4];

Array.prototype.newReduce = function (fun, init) {
  let result = init;
  let arr = this;
  arr.forEach(function (item, index) {
    result = fun.call(this, result, arr[index]);
  });
  return result;
};

const som = arr.newReduce((a, b) => a + b, 5);
const pre = arr.reduce((a, b) => a + b, 5);

console.log(som, pre);



const list = [34,12,65,19, 24, 22, 6];
list.filter(between(10, 25)); // [12, 19, 24, 22]

function between(min,max) {
    return function(){
        return min<list && list<max;
    } 
}


const f1 = new Promise((resolve, reject) =>{
    resolve("f1")
});
const f2 = new Promise((resolve, reject) =>{
    resolve("f2")
});
const f3 = new Promise((resolve, reject) =>{
    resolve("f3")
});
const f4 = new Promise((resolve, reject) =>{
    resolve("f4")
});

f1.then(() =>  new Promise((resolve, reject) => {
    resolve("f2")
}).then(() => new Promise((resolve, reject) =>  resolve("f3")
)))






const list = [1,2,3,4,5];
10


{
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4
}

const list = [34,12,65,19, 24, 22, 6];

list.filter(between(10, 25)); // [12, 19, 24, 22]

// implement between


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


useEffect(()=>{
},[A])

useEffect(()=>{
    console.log(1);
    return () =>{
        console.log(2);
    }   
},[n]);

useEffect(()=>{
},[C])



useEffect(()=>{    
},[F])



// what will happen when you r not going to pass no data to the dependency arry of useEffect

// when you are returning something from the useEffect when it will get called

// why we use immutable thing in react, how this will help

//const list = [];
// [[a1, a2, a3], [b1, b2, b3]]
// a1 + a2 + a3 = target;
// b1 + b2 + a3 = target;
// const threeSum = (list, target) => {
// }

//const list = [34,12,65,19, 24, 22, 6];
// list.filter(between(10, 25)); // [12, 19, 24, 22]
// function between(min,max) {
//     return function(){
//         return min<list && list<max;
//     } 
// }

// why to use SSR 

















