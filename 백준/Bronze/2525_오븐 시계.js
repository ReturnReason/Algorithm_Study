const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

let [h, m] = inputs[0].split(' ').map(Number);
const time = Number(inputs[1]);

m = m + time;

if (m >= 60) {
  h += ~~(m / 60);
  m %= 60;

  if (h >= 24) {
    h -= 24;
  }
}

console.log(`${h} ${m}`);
