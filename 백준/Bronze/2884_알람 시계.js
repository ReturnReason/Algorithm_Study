const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split(' ');

let [h, m] = inputs;
let nm = m - 45;
let result = '';

if (nm < 0) {
  h -= 1;
  nm += 60;
}

if (h < 0) {
  h = 24 + h;
}

result += `${h} ${nm}`;
console.log(result);
