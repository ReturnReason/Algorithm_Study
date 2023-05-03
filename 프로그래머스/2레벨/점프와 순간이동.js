function solution(n) {
  let ret = 0;
  while (n) {
    if (!(n % 2)) n /= 2;
    else {
      n -= 1;
      ret += 1;
    }
  }

  return ret;
}
