function solution(my_string) {
  const reg = /a|e|i|o|u/g;
  return my_string.replace(reg, '');
}
