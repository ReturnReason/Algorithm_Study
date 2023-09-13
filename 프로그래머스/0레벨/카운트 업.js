function solution(start_num, end_num) {
  return Array(end_num - start_num + 1)
    .fill()
    .map((_, i) => start_num + i);
}
