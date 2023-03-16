const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

if (!inputs.join('')) console.log(0);
else console.log(inputs.join('').split(' ').length);
