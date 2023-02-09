function solution(num, k) {
  const index = +num.toString().split('').indexOf(String(k)) + 1;
  return index || -1;
}
