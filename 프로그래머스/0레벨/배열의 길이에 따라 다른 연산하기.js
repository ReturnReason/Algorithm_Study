function solution(arr, n) {
  const even = 2;
  return arr.length % even
    ? arr.map((v, i) => {
        if (!(i % even)) return v + n;
        return v;
      })
    : arr.map((v, i) => {
        if (i % even) return v + n;
        return v;
      });
}
