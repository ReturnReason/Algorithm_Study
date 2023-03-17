const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = 0;

for (let s of inputs.slice(1)) {
  const a = {};
  a[s[0]] = 1;
  let is = false;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      if (a[s[i + 1]]) {
        is = true;
        break;
      } else a[s[i + 1]] = 1;
    }
  }
  if (!is) cnt++;
}

console.log(cnt);
