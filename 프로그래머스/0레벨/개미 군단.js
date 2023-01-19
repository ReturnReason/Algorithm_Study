function solution(hp) {
  let cnt = 0;

  while (hp) {
    if (hp / 5) {
      cnt += ~~(hp / 5);
      hp %= 5;
    }
    if (hp / 3) {
      cnt += ~~(hp / 3);
      hp %= 3;
    }
    cnt += ~~(hp / 1);
    hp %= 1;
  }

  return cnt;
}
