const fs = require('fs');
const [n, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let m = [];

for (let i of inputs) {
  const [age, name] = i.split(' ');
  m.push({ age, name });
}

m.sort((a, b) => {
  if (a.age === b.age) return 1;
  else return a.age - b.age;
});

let ret = '';

for (let a of m) {
  ret += `${a.age} ${a.name}\n`;
}

console.log(ret);
