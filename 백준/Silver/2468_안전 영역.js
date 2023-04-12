const fs = require('fs');
const [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let visited = Array.from(Array(+N), () => Array(+N).fill(0));
const map = Array.from(Array(+N), () => Array(+N).fill(0));

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

let result = 0;
const resultM = [];

inputs.forEach((i, k) => {
  const arr = i.split(' ');

  arr.forEach((a, j) => {
    map[k][j] = +a;
  });
});

for (let k = 1; k <= 100; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && map[i][j] > k) {
        dfs(i, j, k);
        result += 1;
      }
    }
  }
  visited = Array.from(Array(+N), () => Array(+N).fill(0));
  resultM.push(result);
  result = 0;
}

function dfs(y, x, k) {
  visited[y][x] = 1;

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (ny < 0 || nx < 0 || ny >= +N || nx >= +N) continue;
    if (visited[ny][nx] || map[ny][nx] <= k) continue;
    dfs(ny, nx, k);
  }
}

let ret = Math.max(...resultM);
if (!ret) console.log(1);
else console.log(ret);
