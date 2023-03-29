/**
 * <문제>
 * 종화는 21세기 유명한 방구쟁이다.
 * 종화는 방구를 낄 때 "이러다... 다 죽어!!" 를 외치며 방구를 뀌는데
 * 이렇게 방귀를 뀌었을 때  방귀는 상하좌우 네방향으로 뻗어나가며
 * 종화와 연결된 "육지"는 모두 다 오염된다. "바다"로는 방구가 갈 수 없다.
 * 맵이 주어졌을 때 종화가 "이러다... 다 죽어!!"를 "최소한" 몇 번외쳐야
 * 모든 육지를 오염시킬 수 있는지 말해보자. 1은 육지며 0은 바다를 가리킨다.
 *
 * <입력>
 * 맵의 세로길이 N과 가로길이 M 이 주어지고 이어서 N * M의 맵이 주어진다.
 *
 * <출력>
 *  "이러다... 다 죽어!!"를 몇 번외쳐야하는지 출력하라.
 *
 * <범위>
 * 1 <= N <= 100
 * 1 <= M <= 100
 *
 * <예제입력>
 * 5 5
 * 1 0 1 0 1
 * 1 1 0 0 1
 * 0 0 0 1 1
 * 0 0 0 1 1
 * 0 1 0 0 0
 *
 * <예제출력>
 * 4
 */

const fs = require('fs');
const [k, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = k.split(' ').map(Number);
const map = Array.from({ length: n }, () => Array(m));
const visited = Array.from({ length: n }, () => Array(m).fill(0));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

inputs.forEach((a, i) => {
  const [...items] = a.split(' ').map(Number);

  for (let j = 0; j < items.length; j++) {
    map[i][j] = items[j];
  }
});

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && map[i][j]) {
      dfs(i, j);
      result += 1;
    }
  }
}

function dfs(y, x) {
  visited[y][x] = 1;

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
    if (!visited[ny][nx] && map[ny][nx]) {
      dfs(ny, nx);
    }
  }
}

console.log(result);
