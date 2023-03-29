function solution(park, routes) {
  const m = Array.from({ length: park.length }, () => Array(park[0].length));
  let x;
  let y;

  for (let i = 0; i < park.length; i++) {
    park[i].split('').forEach((v, j) => {
      if (v === 'S') {
        y = i;
        x = j;
        m[i][j] = 0;
      } else if (v == 'X') {
        m[i][j] = 1;
      } else m[i][j] = 0;
    });
  }

  let yLen = park.length;
  let xLen = park[0].length;

  for (let i = 0; i < routes.length; i++) {
    let [c, n] = routes[i].split(' ');
    n = +n;

    if (c === 'E') {
      if (x + n < xLen) {
        let cnt = n;
        let flag = false;
        while (n) {
          if (m[y][x + n]) {
            flag = false;
            break;
          } else flag = true;
          n--;
        }
        if (flag) x += cnt;
      }
    } else if (c === 'W') {
      if (x - n >= 0) {
        let cnt = n;
        let flag = false;
        while (n) {
          if (m[y][x - n]) {
            flag = false;
            break;
          } else flag = true;
          n--;
        }
        if (flag) x -= cnt;
      }
    } else if (c === 'N') {
      if (y - n >= 0) {
        let cnt = n;
        let flag = false;
        while (n) {
          if (m[y - n][x]) {
            flag = false;
            break;
          } else flag = true;
          n--;
        }
        if (flag) y -= cnt;
      }
    } else if (c === 'S') {
      if (y + n < yLen) {
        let cnt = n;
        let flag = false;
        while (n) {
          if (m[y + n][x]) {
            flag = false;
            break;
          } else flag = true;
          n--;
        }
        if (flag) y += cnt;
      }
    }
  }

  return [y, x];
}
