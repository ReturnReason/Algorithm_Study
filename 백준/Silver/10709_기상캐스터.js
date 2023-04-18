const fs = require('fs');
const [HW, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [H, W] = HW.split(' ').map(Number);
const map = Array.from(Array(H), () => Array(W).fill(0));
const visited = Array.from(Array(H), () => Array(W).fill(-1));

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (inputs[i][j] == 'c') map[i][j] = 1;
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] == 1) {
      visited[i][j] = 0;
      continue;
    }
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (j !== 0 && visited[i][j - 1] >= 0 && map[i][j] !== 1) {
      visited[i][j] = visited[i][j - 1] + 1;
    }
  }
}

let ret = '';
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    ret += `${visited[i][j]} `;
  }
  ret += '\n';
}

console.log(ret);
