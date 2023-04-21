function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);
  let box = ~~(score.length / m);

  for (let i = 1; i <= box; i++) {
    result += score[m * i - 1] * m;
  }

  return result;
}
