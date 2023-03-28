function solution(people, limit) {
  if (people.length === 1) return 1;

  people.sort((a, b) => a - b);

  let i = 0;
  let result = 0;

  while (i < people.length) {
    const mx = people.pop();
    if (limit - mx - people[i] >= 0) {
      i += 1;
      result += 1;
    } else {
      result += 1;
    }
  }

  return result;
}
