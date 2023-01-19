function solution(array) {
  const n = array.reduce((p, c) => Math.max(p, c), 0);
  return [n, array.indexOf(n)];
}
