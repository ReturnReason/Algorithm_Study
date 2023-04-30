const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim();
const [N, K] = inputs.split(' ').map(Number);

const q = [[N, 0]];
const visited = Array(100_004).fill(false);

let j = 0;
while (q.length) {
  const [x, c] = q[j++];
  if (visited[x]) continue;

  visited[x] = true;

  if (x === K) {
    console.log(c);
    break;
  }

  const arr = [x + 1, x - 1, x * 2];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > 100_000) continue;
    q.push([arr[i], c + 1]);
  }
}
