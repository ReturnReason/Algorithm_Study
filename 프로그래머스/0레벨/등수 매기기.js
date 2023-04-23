function solution(score) {
  const avg = score.map((s) => (s[0] + s[1]) / 2);
  const srt = [...avg].sort((a, b) => b - a);

  return avg.map((v) => srt.indexOf(v) + 1);
}
