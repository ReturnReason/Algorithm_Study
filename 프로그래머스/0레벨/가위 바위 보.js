function solution(rsp) {
  return rsp
    .split('')
    .map((r) => {
      return r === '2' ? 0 : r === '0' ? 5 : 2;
    })
    .join('');
}
