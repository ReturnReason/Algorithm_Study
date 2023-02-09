function solution(n) {
  const ret = [];

  for (let i = 1; i <= n / 2; i++) {
    if (!(n % i)) ret.push(i);
  }

  ret.push(n);

  return ret;
}
