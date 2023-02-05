const f = require('fs').readFileSync('/dev/stdin').toString().trim();

function result(f) {
  if (f.length === 1) return f;

  const map = {};

  for (let s of f) {
    map[s] = (map[s] || 0) + 1;
  }

  const arr = Object.values(map);
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) odd++;
    if (odd > 1) {
      return `I'm Sorry Hansoo`;
    }
  }

  let start = '';
  let mid = '';
  let end = '';

  const sorted = Object.entries(map).sort();
  for (let [k, v] of sorted) {
    if (v % 2) mid = k;
    start += k.repeat(~~(v / 2));
    end = k.repeat(~~(v / 2)) + end;
  }

  return `${start + mid + end}`;
}

console.log(result(f));
