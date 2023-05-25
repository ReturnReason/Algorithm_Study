function solution(keymap, targets) {
  const map = new Map();

  keymap.forEach((key) => {
    for (let i = 0; i < key.length; i++) {
      if (map.has(key[i])) map.set(key[i], Math.min(map.get(key[i]), i + 1));
      else map.set(key[i], i + 1);
    }
  });

  let flag = true;
  const result = [];
  targets.forEach((target) => {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
      if (map.get(target[i])) {
        count += map.get(target[i]);
        flag = false;
      } else {
        count = 0;
        break;
      }
    }
    result.push(count ? count : -1);
    flag = true;
  });

  return result;
}
