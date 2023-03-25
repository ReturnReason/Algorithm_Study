const fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().trim();
inputs = +inputs;

let result = 0;

while (inputs) {
  if (inputs >= 5 && inputs % 5 === 0) {
    inputs -= 5;
    result++;
  } else if (inputs >= 3) {
    inputs -= 3;
    result++;
  } else {
    result = -1;
    break;
  }
}

console.log(result);
