function solution(k, tangerine) {
  const m = {};
  tangerine.forEach((t) => {
    m[t] = (m[t] || 0) + 1;
  });

  const arr = Object.entries(m).sort((a, b) => b[1] - a[1]);

  let result = 0;
  for (let a of arr) {
    const [key, value] = a;
    k -= value;
    result += 1;

    if (k <= 0) break;
  }

  return result;
}
