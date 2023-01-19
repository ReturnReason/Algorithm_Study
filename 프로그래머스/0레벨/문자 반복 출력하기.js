function solution(my_string, n) {
  const ret = [];
  my_string.split('').map((s) => ret.push(s.repeat(n)));
  return ret.join('');
}
