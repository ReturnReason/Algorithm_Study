const fs = require('fs');
const [N, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = N.split(' ').map(Number);
const map = [];

inputs.map((i) => {
  map.push(i.split('').map(Number));
});

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

const visited = Array.from(Array(n), () => Array(m).fill(0));
const q = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && map[i][j]) {
      bfs(i, j);
    }
  }
}

function bfs(y, x) {
  q.push([y, x]);
  visited[y][x] = 1;

  while (q.length) {
    let [cy, cx] = q.shift();
    for (let i = 0; i < 4; i++) {
      ny = cy + dy[i];
      nx = cx + dx[i];

      if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if (visited[ny][nx] || !map[ny][nx]) continue;
      visited[ny][nx] = visited[cy][cx] + 1;
      q.push([ny, nx]);
    }
  }
}

console.log(visited[n - 1][m - 1]);
