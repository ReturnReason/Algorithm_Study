function solution(lottos, win_nums) {
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  const countZero = lottos.filter((v) => !v).length;
  if (countZero === 6) return [1, 6];

  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  let i = 0;
  let j = 0;
  let cnt = 0;

  const len = win_nums.length;
  while (i < len && j < len) {
    if (win_nums[i] === lottos[j]) {
      cnt += 1;
      j++;
      i++;
    } else if (win_nums[i] < lottos[j]) i += 1;
    else j += 1;
  }

  const total = cnt + countZero;
  return [rank[total], rank[cnt]];
}
