function solution(n) {
  return n % 2 ? sum(n) : pow(n);
}

const sum = (n) => {
  let result = n;
  for(let i = 1; i < n; i+=2){
      result += i;
  }
  return result;
}

const pow = (n) => {
  let result = n ** 2;
  for(let i = 2; i < n; i+=2){
      result += (i ** 2);
  }
  return result;
}