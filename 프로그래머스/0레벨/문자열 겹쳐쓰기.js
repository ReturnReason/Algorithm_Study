function solution(my_string, overwrite_string, s) {
  const arr = [...my_string];
  arr.splice(s, overwrite_string.length);
  arr.splice(s, 0, overwrite_string);
  return arr.join('');
}
