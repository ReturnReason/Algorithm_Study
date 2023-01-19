function solution(n) {
  let ret = n % 2 === 0 ? n : 0;

  while ((n -= 1)) {
    ret += n % 2 === 0 ? n : 0;
  }

  return ret;
}
