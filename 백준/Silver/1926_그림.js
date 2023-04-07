const fs = require('fs');
const [n, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = n.split(' ').map(Number);
const visited = Array.from(Array(a), () => Array(b).fill(0));
const map = [];

for (let i = 0; i < inputs.length; i++) {
  map.push([]);
  map[i] = inputs[i].split(' ').map(Number);
}

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let pic = 0;
let m = 0;

for (let i = 0; i < a; i++) {
  for (let j = 0; j < b; j++) {
    if (!visited[i][j] && map[i][j]) {
      let area = bfs(i, j);
      m = Math.max(area, m);
      pic += 1;
    }
  }
}

function bfs(cy, cx) {
  const q = [[cy, cx]];
  visited[cy][cx] = 1;
  let w = 0;

  while (q.length) {
    let [y, x] = q.shift();
    w += 1;

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny < 0 || nx < 0 || ny >= a || nx >= b) continue;
      if (visited[ny][nx] || !map[ny][nx]) continue;
      visited[ny][nx] = 1;
      q.push([ny, nx]);
    }
  }

  return w;
}

console.log(`${pic}\n${m}`);
