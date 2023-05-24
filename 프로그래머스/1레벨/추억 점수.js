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

//* 안 푼줄 알았는데.. (2023.05.24 2차 풀이) *//

function solution(name, yearning, photo) {
  const peoples = new Map();
  name.forEach((n, i) => {
    peoples.set(n, yearning[i]);
  });

  const result = [];
  photo.forEach((p) => {
    let score = 0;
    p.forEach((name) => {
      if (peoples.get(name)) {
        score += peoples.get(name);
      }
    });
    result.push(score);
  });

  return result;
}
