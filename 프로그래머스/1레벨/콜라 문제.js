function solution(a, b, n) {
  let result = 0;
  let rest = n;

  while (rest >= a) {
    let newBottles = Math.floor(rest / a) * b;
    rest = rest - a * Math.floor(rest / a) + newBottles;
    result += newBottles;
  }

  return result;
}
