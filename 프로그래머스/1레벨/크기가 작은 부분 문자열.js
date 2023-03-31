function solution(t, p) {
  const arr = [];

  for (let i = 0; i < t.length; i++) {
    let ret = t.substring(i, p.length + i);
    if (ret.length === p.length) {
      arr.push(ret);
    }
  }

  const ret = arr.map(Number).filter((v) => v <= +p);
  return ret.length;
}
