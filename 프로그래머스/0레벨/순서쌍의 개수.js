function solution(n) {
  let cnt = 0;
  let i = 1;

  while (~~(~~(n / i) / 2)) {
    if (i * ~~(n / i) === n) {
      cnt++;
    }
    i++;
  }
  return cnt + 1;
}
