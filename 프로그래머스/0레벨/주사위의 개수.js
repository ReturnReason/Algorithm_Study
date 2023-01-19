function solution(box, n) {
  const [x, y, h] = box;
  return ~~(x / n) * ~~(y / n) * ~~(h / n);
}
