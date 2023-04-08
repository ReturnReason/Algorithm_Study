function solution(clothes) {
  const m = {};

  clothes.forEach(([n, k]) => {
    m[k] = (m[k] || 0) + 1;
  });

  let cnt = 1;
  if (Object.values(m).length === 1) return Object.values(m)[0];

  for (let k in m) {
    cnt *= m[k] + 1;
  }

  return cnt - 1;
}
