function solution(number, limit, power) {
  let total = 0;

  for (let k = 1; k <= number; k++) {
    let divCount = 0;

    for (let i = 1; i <= Math.sqrt(k); i++) {
      if (k % i === 0) {
        divCount++;
        if (~~(k / i) !== i) {
          divCount++;
        }
      }
    }

    const result = divCount > limit ? power : divCount;
    total += result;
  }

  return total;
}
