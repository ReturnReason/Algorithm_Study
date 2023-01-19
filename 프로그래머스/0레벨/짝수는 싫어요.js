function solution(n) {
  const ret = !(n % 2) ? [] : [n];
  while (n--) {
    if (n % 2) ret.push(n);
  }
  return ret.sort((a, b) => a - b);
}
