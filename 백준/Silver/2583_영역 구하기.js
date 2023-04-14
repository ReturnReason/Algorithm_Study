const fs = require('fs');
const [MNK, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N, K] = MNK.split(' ').map(Number);

const map = Array.from(Array(N), () => Array(M).fill(0));
const visited = Array.from(Array(N), () => Array(M).fill(0));

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

let cnt = 0;
let ret = [];

for (let a of input) {
  const [y1, x1, y2, x2] = a.split(' ').map(Number);
  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      map[i][j] = 1;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && !map[i][j]) {
      ret.push(dfs(i, j));
      cnt += 1;
    }
  }
}

function dfs(y, x) {
  visited[y][x] = 1;
  let c = 1;

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
    if (visited[ny][nx] >= 1 || map[ny][nx] >= 1) continue;
    c += dfs(ny, nx);
  }

  return c;
}

ret.sort((a, b) => a - b);

let result = '';
for (let i of ret) {
  result += i + ' ';
}

console.log(cnt);
console.log(result);
