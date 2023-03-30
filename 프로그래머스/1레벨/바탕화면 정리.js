function solution(wallpaper) {
  let [sx, sy, mx, my] = [0, 0, 0, 0];
  let isStarted = false;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (!isStarted && wallpaper[i][j] == '#') {
        isStarted = true;
        sy = i;
        sx = j;
        my = i;
        mx = j;
        continue;
      }
      if (wallpaper[i][j] == '#') {
        if (sy > i && sx > j) {
          sy = i;
          sx = j;
        } else if (sy > i) sy = i;
        else if (sx > j) sx = j;

        if (my < i && mx < j) {
          my = i;
          mx = j;
        } else if (my < i) my = i;
        else if (mx < j) mx = j;
      }
    }
  }

  return [sy, sx, my + 1, mx + 1];
}
