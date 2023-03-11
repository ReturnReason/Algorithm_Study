const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = +inputs[0];

if (a >= 90 && a <= 100) console.log('A');
else if (a >= 80) console.log('B');
else if (a >= 70) console.log('C');
else if (a >= 60) console.log('D');
else console.log('F');
