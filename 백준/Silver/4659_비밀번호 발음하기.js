const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

inputs.pop();

const aeiou = ['a', 'e', 'i', 'o', 'u'];
const notAcc = [];
let notAeiou = [];

for (let i = 97; i <= 122; i++) {
  notAeiou.push(String.fromCharCode(i));
}

notAeiou = notAeiou.filter((na) => !aeiou.includes(na));

for (let word of inputs) {
  let hasAeiou = false;

  for (let a of aeiou) {
    if (word.includes(a)) hasAeiou = true;
  }

  if (!hasAeiou) {
    console.log(`<${word}> is not acceptable.`);
    continue;
  }

  let sameCnt = 1;
  let prev = '';
  let pprev = '';
  for (let w of word) {
    if (prev && pprev) {
      if (aeiou.includes(prev) && aeiou.includes(pprev) && aeiou.includes(w)) {
        notAcc.push(word);
        break;
      }

      if (notAeiou.includes(prev) && notAeiou.includes(pprev) && notAeiou.includes(w)) {
        notAcc.push(word);
        break;
      }
    }

    if (prev == w) {
      sameCnt += 1;
    } else {
      sameCnt = 1;
    }

    if (sameCnt == 2) {
      if (w != 'e' && w != 'o') notAcc.push(word);
      prev = w;
      break;
    }

    pprev = prev;
    prev = w;
  }

  if (notAcc.length) {
    console.log(`<${word}> is not acceptable.`);
    notAcc.pop();
  } else console.log(`<${word}> is acceptable.`);
}
