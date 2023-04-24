const fs = require('fs');
const [RC, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [R, C] = RC.split(' ').map(Number);

const map = Array.from(Array(R), () => Array(C).fill('#'));
const JH = Array.from(Array(R), () => Array(C).fill(-1));
const B = Array.from(Array(R), () => Array(C).fill(-1));

const dy = [1, 0, -1, 0];
const dx = [0, 1, 0, -1];

let [jy, jx] = [0, 0];
let [fy, fx] = [0, 0];

const q = [];
const fq = [];

inputs.forEach((v, i) => {
  const a = v.split('');
  a.forEach((w, j) => {
    map[i][j] = w;
    if (w == 'J') {
      jy = i;
      jx = j;
      JH[i][j] = 0;
      q.push([jy, jx]);
    }

    if (w == 'F') {
      fy = i;
      fx = j;
      B[i][j] = 0;
      fq.push([fy, fx]);
    }
  });
});

while (fq.length) {
  const [by, bx] = fq.shift();

  for (let i = 0; i < 4; i++) {
    let ny = by + dy[i];
    let nx = bx + dx[i];

    if (ny < 0 || nx < 0 || ny >= R || nx >= C) continue;
    if (B[ny][nx] >= 0 || map[ny][nx] === '#') continue;
    B[ny][nx] = B[by][bx] + 1;
    fq.push([ny, nx]);
  }
}

let result = -1;

while (q.length) {
  let flag = false;
  const [by, bx] = q.shift();

  for (let i = 0; i < 4; i++) {
    let ny = by + dy[i];
    let nx = bx + dx[i];

    if (ny < 0 || nx < 0 || ny >= R || nx >= C) {
      result = JH[by][bx] + 1;
      flag = true;
      break;
    }
    if (JH[ny][nx] >= 0 || map[ny][nx] === '#' || map[ny][nx] === 'F') continue;
    if (B[ny][nx] > -1 && B[ny][nx] <= JH[by][bx] + 1) continue;
    JH[ny][nx] = JH[by][bx] + 1;
    q.push([ny, nx]);
  }
  if (flag) break;
}

result > -1 ? console.log(result) : console.log('IMPOSSIBLE');

/**
 * memo.
 * 큐에는 거리 순으로 들어간다.
 */
