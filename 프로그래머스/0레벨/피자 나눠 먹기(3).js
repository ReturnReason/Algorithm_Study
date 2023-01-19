function solution(slice, n) {
  return ~~(n / slice) + !!(n % slice);
}
