function solution(s) {
  const arr = s.split('');
  const a = [];
  const b = [];
  const c = [];
  let result = 0;

  let k = 0;
  while (k < s.length) {
    let prev = [];
    let i = 0;
    for (let str of arr) {
      if (['[', '(', '{'].includes(str)) {
        prev.push(str);
        if (str === '[') a.push(str);
        else if (str === '{') b.push(str);
        else if (str === '(') c.push(str);
      } else {
        if (str === ']') {
          if (a.length && prev[prev.length - 1] === '[') {
            a.pop();
            prev.pop();
          } else break;
        } else if (str === '}') {
          if (b.length && prev[prev.length - 1] === '{') {
            b.pop();
            prev.pop();
          } else break;
        } else if (str === ')') {
          if (c.length && prev[prev.length - 1] === '(') {
            c.pop();
            prev.pop();
          } else break;
        }
      }

      i += 1;
    }

    if (i === s.length && !a.length && !b.length && !c.length) result += 1;

    arr.push(arr.shift());
    k++;
  }

  return result;
}
