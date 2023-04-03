function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;
  let pos = false;

  let a = false;
  let a1 = 0;
  for (const b of goal) {
    if (b !== cards1[a1]) {
      a = false;
      break;
    } else {
      a = true;
      a1 += 1;
    }
  }

  let b = false;
  let b1 = 0;
  for (const c of goal) {
    if (c !== cards2[b1]) {
      b = false;
      break;
    } else {
      b = true;
      b1 += 1;
    }
  }

  for (const a of goal) {
    if (cards1[i] == a) {
      i += 1;
      pos = true;
      continue;
    }

    if (cards2[j] == a) {
      j += 1;
      pos = true;
      continue;
    }

    if (cards1[i] !== a && cards2[j] !== a) {
      pos = false;
      break;
    }
  }

  if (a || b) return 'Yes';
  return pos ? 'Yes' : 'No';
}
