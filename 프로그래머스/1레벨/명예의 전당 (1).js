function solution(k, score) {
  const ret = [];
  const stk = [];

  score.forEach((v, i) => {
    if (stk.length < k) {
      stk.push(v);
    } else {
      stk.push(v);
      stk.sort((a, b) => b - a);
      stk.pop();
    }

    ret.push(Math.min(...stk));
  });

  return ret;
}
