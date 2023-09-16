function solution(players, callings) {
  const cnt = new Map();
  callings.forEach((c) => {
    cnt.get(c) ? cnt.set(c, cnt.get(c) + 1) : cnt.set(c, 1);
  });

  const foundIdx = new Map();

  callings.forEach((c) => {
    foundIdx.has(c) ? foundIdx.get(c) : foundIdx.set(c, players.indexOf(c));
    let idx = foundIdx.get(c);

    [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];
    foundIdx.set(c, idx - 1);
    foundIdx.set(players[idx], idx);
  });

  return players;
}
