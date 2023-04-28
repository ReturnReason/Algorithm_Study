const fs = require('fs');
const [NM, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = NM.split(' ').map(Number);

const d = {};
const ret = [];

for (let i = 0; i < N; i++) {
  d[inputs[i]] = 1;
}

for (let i = N; i < N + M; i++) {
  if (d[inputs[i]]) ret.push(inputs[i]);
}

ret.sort();
console.log(ret.length);
ret.forEach((r) => {
  console.log(r);
});
