const fs = require('fs');
let [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const ret = [];

for (let i = 0; i < N; i++) {
  const a = inputs[i].replace(/[a-z]/g, ',');
  const a2 = a.split(',').filter((v) => v !== '');

  ret.push(...a2);
}

const stringNums = [];

for (let j = 0; j < ret.length; j++) {
  let rz = removeZero(ret[j]);
  stringNums.push(rz);
}

stringNums.sort(custom);

function removeZero(num) {
  let i = 0;
  while (num[i] == 0) {
    num = num.substring(1, num.length);
  }
  return num.length ? num : '0';
}

function custom(a, b) {
  if (a.length == b.length) return a - b;
  return a.length - b.length;
}

stringNums.forEach((s) => {
  console.log(s);
});
