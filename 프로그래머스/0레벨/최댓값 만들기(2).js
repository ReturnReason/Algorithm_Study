function solution(numbers) {
  numbers.sort((a, b) => a - b);

  const n1 = numbers[0] * numbers[1];
  const n2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];

  return n1 < n2 ? n2 : n1;
}
