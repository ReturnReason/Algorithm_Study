function solution(array) {
  cnt = 0;

  for (let a of array.join('')) {
    if (a == 7) cnt++;
  }

  return cnt;
}
