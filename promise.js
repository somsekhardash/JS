// Problem

const first = () => {
  return "i m 1st";
};
const second = () => {
  return "i m 2nd";
};
const third = () => {
  return "i m 3rd";
};

const callMe = () => {
  console.log(first());
  console.log(second());
  console.log(third());
};

callMe();

console.log("-----------------");

const first1 = () => {
  return "i m 1st";
};
const second1 = () => {
  setTimeout(() => {
    return "i m 2nd";
  }, 1000);
};
const third1 = () => {
  return "i m 3rd";
};

const callMe1 = () => {
  console.log(first1());
  console.log(second1());
  console.log(third1());
};

callMe1();

console.log("-----------------");
// solution

const first2 = () => {
  return "i m 1st";
};
const second2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i m 2nd");
    }, 1000);
  });
};
const third2 = () => {
  return "i m 3rd";
};

const callMe2 = () => {
  console.log(first2());
  console.log(second2().then((res) => console.log(res)));
  console.log(third2());
};

callMe2();

//but we are not getting 1st 2nd third
console.log("-----------------");

const first3 = () => {
  return "i m 1st";
};
const second3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i m 2nd");
    }, 1000);
  });
};
const third3 = () => {
  return "i m 3rd";
};

const callMe3 = async () => {
  console.log(first3());
  console.log(await second3());
  console.log(third3());
};

callMe3();

// run in browser
/* fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((res) => console.log(res));
 */

/*******************************************************/

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
