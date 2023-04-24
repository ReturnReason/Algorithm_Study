const fs = require('fs');
const [NM, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
const arr = inputs.map(Number).sort((a, b) => a - b);

let i = 0;
let j = 0;
let result = Infinity;

while (i < N && j < N) {
  let num = Math.abs(arr[i] - arr[j]);

  if (num >= M) {
    result = Math.min(num, result);
    i++;
  } else {
    j++;
  }
}

console.log(result);
