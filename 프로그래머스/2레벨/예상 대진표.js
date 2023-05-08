function solution(n, a, b) {
  let ret = 0;

  while (a !== b) {
    a = Math.round(a / 2);
    b = Math.round(b / 2);
    ret += 1;
  }

  return ret;
}
