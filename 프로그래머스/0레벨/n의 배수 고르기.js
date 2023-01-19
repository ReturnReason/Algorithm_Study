function solution(n, numlist) {
  return numlist.filter((m) => !(m % n));
}
