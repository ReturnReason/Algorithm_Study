function solution(my_string) {
  return my_string
    .replace(/[a-zA-Z]/g, '')
    .split('')
    .reduce((p, c) => +p + +c, 0);
}
