function solution(emergency) {
  const copy = [...emergency].sort((a, b) => b - a);

  const ret = emergency.map((v) => copy.indexOf(v) + 1);
  return ret;
}
