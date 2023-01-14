function solution(s) {
  if (!Number.isNaN(Number(s))) return Number(s);

  const words = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let c = '';
  let ret = '';

  for (let ss of s) {
    if (!isNaN(ss)) {
      ret += ss;
    } else {
      c += ss;
    }

    if (words[c] >= 0) {
      ret += words[c];
      c = '';
    }
  }

  return Number(ret);
}
