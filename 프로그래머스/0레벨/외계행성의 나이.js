function solution(age) {
  const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  return String(age)
    .split('')
    .map((v) => a[+v])
    .join('');
}
