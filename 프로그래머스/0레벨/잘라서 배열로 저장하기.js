function solution(my_str, n) {
  if (my_str.length === n) return [my_str];

  const ret = [];

  let str = '';
  let i = 0;
  while (i < my_str.length) {
    if (str.length === n) {
      ret.push(str);
      str = '';
    }

    str += my_str[i];
    i++;
  }

  ret.push(str);

  return ret;
}
