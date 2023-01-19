function solution(price) {
  let dis = 0;

  if (price >= 500_000) dis = price * 0.2;
  else if (price >= 300_000) dis = price * 0.1;
  else if (price >= 100_000) dis = price * 0.05;

  return ~~(price - dis);
}
