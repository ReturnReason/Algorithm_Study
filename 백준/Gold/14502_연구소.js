const fs = require('fs');
const [NM, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = NM.split(' ').map(Number);

let map = Array.from(Array(N), () => Array(M).fill(0));
let visited = Array.from(Array(N), () => Array(M).fill(0));

inputs.forEach((v, i) => {
  v.split(' ')
    .map(Number)
    .forEach((w, j) => {
      map[i][j] = w;
    });
});

let result = 0;
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

const virus = [];
const wall = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) wall.push([i, j]);
    if (map[i][j] === 2) virus.push([i, j]);
  }
}

for (let i = 0; i < wall.length; i++) {
  for (let j = 0; j < i; j++) {
    for (let k = 0; k < j; k++) {
      map[wall[i][0]][wall[i][1]] = 1;
      map[wall[j][0]][wall[j][1]] = 1;
      map[wall[k][0]][wall[k][1]] = 1;
      result = Math.max(result, checker());
      map[wall[i][0]][wall[i][1]] = 0;
      map[wall[j][0]][wall[j][1]] = 0;
      map[wall[k][0]][wall[k][1]] = 0;
    }
  }
}

function checker() {
  visited = Array.from(Array(N), () => Array(M).fill(0));

  for (let i = 0; i < virus.length; i++) {
    visited[virus[i][0]][virus[i][1]] = 1;
    dfs(virus[i][0], virus[i][1]);
  }

  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0 && !visited[i][j]) cnt += 1;
    }
  }
  return cnt;
}

function dfs(y, x) {
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
    if (visited[ny][nx] || map[ny][nx]) continue;
    visited[ny][nx] = 1;
    dfs(ny, nx);
  }
}

console.log(result);
