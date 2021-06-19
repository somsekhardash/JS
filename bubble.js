//  Bubble sort

let data = [5, 1, 21, 3];
let n = data.length;
let c = 0;
while (n) {
  for (let i = 0; i < n; i++) {
    if (data[i + 1] < data[i]) {
      [data[i], data[i + 1]] = [data[i + 1], data[i]];
    }
    c++;
  }
  n = n - 1;
}

console.log(data);
console.log(c);
