const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [a, b] = inputs;
console.log(Math.max([...a].reverse().join(''), [...b].reverse().join('')));
