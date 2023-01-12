function solution(A, B) {
  if (A === B) return 0;

  const a = [];

  for (let i = 0; i < A.length; i++) {
    a.push(A[i]);
  }

  for (let i = 0; i < A.length; i++) {
    a.unshift(a.pop());
    if (a.join('') === B) return i + 1;
  }

  return -1;
}
