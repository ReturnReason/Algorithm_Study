const fs = require('fs');
const [MN, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

const q = [];

const [M, N] = MN.split(' ').map(Number);
const visited = Array.from(Array(N), () => Array(M).fill(0));

const map = inputs.map((v, i) => {
  return v.split(' ').map((w, j) => {
    if (w == 1) {
      q.push([i, j]);
      visited[i][j] = 1;
    }
    return +w;
  });
});

let hasZero = false;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] == -1) visited[i][j] = -1;
    if (map[i][j] == 0) hasZero = true;
  }
}

let result = 0;

let idx = 0;
while (q.length !== idx) {
  const [y, x] = q[idx];
  idx++;

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
    if (map[ny][nx] < 0 || map[ny][nx]) continue;
    if (visited[ny][nx]) continue;
    visited[ny][nx] = visited[y][x] + 1;
    q.push([ny, nx]);
    result = visited[ny][nx];
  }
}

let isDone = true;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j] == 0 && map[i][j] != -1) {
      result = -1;
      isDone = false;
    }
  }
}

if (isDone) {
  console.log(hasZero ? result - 1 : 0);
} else {
  console.log(result);
}
