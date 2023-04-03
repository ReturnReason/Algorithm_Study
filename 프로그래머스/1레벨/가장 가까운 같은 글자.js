function solution(s) {
  const m = {};
  const mc = {};
  const result = [];

  [...s].forEach((a, i) => {
    if (!m[a]) {
      m[a] = -1;
      mc[a] = i;
    } else if (m[a] === -1) {
      m[a] = i - mc[a];
      mc[a] = i;
    } else {
      m[a] = i - mc[a];
      mc[a] = i;
    }
    result.push(m[a]);
  });

  return result;
}
