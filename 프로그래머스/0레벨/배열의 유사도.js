function solution(s1, s2) {
  const ret = {};

  s1.forEach((s) => (ret[s] = (ret[s] || 0) + 1));
  s2.forEach((s) => (ret[s] = (ret[s] || 0) + 1));

  return Object.values(ret).filter((c) => c >= 2).length;
}
