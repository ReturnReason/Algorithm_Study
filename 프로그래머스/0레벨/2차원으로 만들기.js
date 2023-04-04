function solution(num_list, n) {
  const ret = [];

  for (let i = 0; i < num_list.length / n; i++) {
    ret.push([]);
  }

  let k = 0;
  for (let i = 0; i < ret.length; i++) {
    for (let j = 0; j < n; j++) {
      ret[i][j] = num_list[k++];
    }
  }

  return ret;
}
