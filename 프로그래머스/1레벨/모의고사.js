function solution(answers) {
  const supoja = ['12345', '21232425', '3311224455'];
  let i = (j = k = 0);
  const supojaCnt = [0, 0, 0];

  answers.forEach((a) => {
    if (a == supoja[0][i % 5]) supojaCnt[0]++;
    if (a == supoja[1][j % 8]) supojaCnt[1]++;
    if (a == supoja[2][k % 10]) supojaCnt[2]++;
    i++;
    j++;
    k++;
  });

  const max = Math.max(...supojaCnt);
  const ret = supojaCnt.map((v, i) => {
    if (v == max) return i + 1;
  });

  return ret.filter((v) => !!v);
}
