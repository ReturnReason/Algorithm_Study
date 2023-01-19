function solution(my_string) {
  return my_string
    .split('')
    .map((s) => {
      const c = s.charCodeAt();
      if (c >= 97 && c <= 122) return String.fromCharCode(c - 32);
      else return String.fromCharCode(c + 32);
    })
    .join('');
}
