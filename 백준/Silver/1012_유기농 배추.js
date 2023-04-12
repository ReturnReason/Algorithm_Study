const fs = require('fs');
let [T, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const map = inputs.map((i) => i.split(' ').map(Number));

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

while (T--) {
  const [M, N, K] = map.shift();
  const board = Array.from(Array(N), () => Array(M).fill(0));
  const visited = Array.from(Array(N), () => Array(M).fill(0));
  let w = 0;

  for (let k = 0; k < K; k++) {
    let [x, y] = map.shift();
    board[y][x] = 1;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && board[i][j]) {
        w += 1;
        dfs(i, j);
      }
    }
  }

  function dfs(y, x) {
    visited[y][x] = 1;

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
      if (visited[ny][nx] || !board[ny][nx]) continue;
      dfs(ny, nx);
    }
  }

  console.log(w);
}
