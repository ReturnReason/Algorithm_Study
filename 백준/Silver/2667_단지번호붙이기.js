const fs = require('fs');
const [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const board = Array.from(Array(inputs.length), () => []);
const visited = Array.from(Array(inputs.length), () => Array(inputs[0].split('').length).fill(0));

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];
let m = inputs.length;
let n = m;

let cnt = 0;
const result = [];

board.forEach((a, i) => {
  for (let j of inputs[i]) {
    a.push(+j);
  }
});

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] && !visited[i][j]) {
      cnt += 1;
      result.push(dfs(i, j, 1));
    }
  }
}

function dfs(y, x, c) {
  visited[y][x] = 1;

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
    if (visited[ny][nx] || !board[ny][nx]) continue;
    c = dfs(ny, nx, c + 1);
  }

  return c;
}

console.log(cnt);
result.sort((a, b) => a - b);
result.forEach((r) => {
  console.log(r);
});
