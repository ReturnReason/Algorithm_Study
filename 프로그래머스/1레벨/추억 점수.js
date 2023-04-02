function solution(name, yearning, photo) {
  const m = {};

  name.forEach((n, i) => {
    m[n] = yearning[i];
  });

  const ret = Array(photo.length).fill(0);

  photo.forEach((pp, i) => {
    pp.forEach((p) => {
      if (m[p]) ret[i] += m[p];
    });
  });

  return ret;
}
