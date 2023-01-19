function solution(num_list) {
  const ret = [0, 0];

  num_list.forEach((n) => (n % 2 ? ret[1]++ : ret[0]++));
  return ret;
}
