const fs = require('fs');
const [n, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = inputs.join(' ').split(' ').map(Number);
const arr = [...new Set(nums)].sort((a, b) => a - b);
const map = new Map();

for (let i = 0; i < arr.length; i++) {
  map.set(arr[i], i);
}

let result = '';
for (let i = 0; i < nums.length; i++) {
  result += map.get(nums[i]) + ' ';
}

console.log(result);
