const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split(' ');

let [a, b, c] = inputs.map(Number);

let all = inputs.every((i) => a == i);
if (all) console.log(`${10_000 + a * 1_000}`);
else if (a == b) console.log(`${1_000 + a * 100}`);
else if (b == c) console.log(`${1_000 + b * 100}`);
else if (c == a) console.log(`${1_000 + c * 100}`);
else {
  const max = [a, b, c].reduce((a, c) => Math.max(a, c));
  console.log(`${max * 100}`);
}
