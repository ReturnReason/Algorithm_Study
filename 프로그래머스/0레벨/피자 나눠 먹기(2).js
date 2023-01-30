function solution(n) {
  let cnt = 1;

  while ((6 * cnt) % n !== 0) {
    cnt++;
  }

  return cnt;
}
