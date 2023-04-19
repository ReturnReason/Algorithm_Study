function solution(numlist, n) {
  return numlist.sort((a, b) => {
    let A = Math.abs(n - a);
    let B = Math.abs(n - b);

    if (A === B) return b - a;
    return A - B;
  });
}
