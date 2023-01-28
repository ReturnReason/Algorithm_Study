const fs = require('fs');
const n = fs.readFileSync('/dev/stdin').toString().trim();

const fact = (n) => {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(fact(n));
