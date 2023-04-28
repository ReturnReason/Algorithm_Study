const fs = require('fs');
const [NM, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
const arr = inputs[0].split(' ').map(Number);

let result = 0;

let isDone = false;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = arr[k] + arr[j] + arr[i];
      if (sum <= M) result = Math.max(result, sum);
      if (M === result) isDone = true;
      if (isDone) break;
    }
    if (isDone) break;
  }
  if (isDone) break;
}

console.log(result);
