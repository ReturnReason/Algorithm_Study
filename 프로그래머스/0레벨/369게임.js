function solution(order) {
  const reg = /3|6|9/g;
  return order
    .toString()
    .split('')
    .filter((n) => n.match(reg)).length;
}
