function solution(n) {
  let result = 0;

  result = dp(n);
  return result;
}

function dp(n) {
  const arr = [];

  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 2;

  if (n > 1) {
    for (let i = 3; i <= n; i++) {
      arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
    }
  }

  return arr[n];
}
