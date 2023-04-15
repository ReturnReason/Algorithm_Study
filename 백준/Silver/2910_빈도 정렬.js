const fs = require('fs');
const [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = inputs[0].split(' ').map(Number);
const map = new Map();

arr.forEach((a, i) => {
  if (!map.get(a)) map.set(a, 1);
  else map.set(a, map.get(a) + 1);
});

const arr2 = Array.from(map.entries()).sort((a, b) => {
  if (a[1] == b[1]) return 0;
  return b[1] - a[1];
});

let result = '';
arr2.forEach((a) => {
  for (let i = 0; i < a[1]; i++) {
    result += `${a[0]} `;
  }
});

console.log(result);
