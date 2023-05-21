function solution(X, Y) {
  let str = '';
  const m = new Map();

  for (let x of X) {
    m.set(x, (m.get(x) || 0) + 1);
  }

  for (let y of Y) {
    if (m.get(y)) {
      m.set(y, m.get(y) - 1);
      str += y;
    }
  }

  if (!str) return '-1';

  const isZero = [...str].map(Number).every((v) => v === 0);

  return isZero
    ? '0'
    : [...str]
        .map(Number)
        .sort((a, b) => b - a)
        .join('');
}
