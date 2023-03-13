const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = inputs.slice(1);
let ret = '';
for (let i = 0; i < arr.length; i++) {
  const a = arr[i].split(' ');
  a[1].split('').forEach((s) => {
    ret += s.repeat(+a[0]);
  });
  ret += '\n';
}

console.log(ret);
