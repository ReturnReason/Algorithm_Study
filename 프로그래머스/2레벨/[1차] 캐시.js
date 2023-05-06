function solution(cacheSize, cities) {
  if (!cacheSize) return cities.length * 5;

  let result = 0;
  const lowerCities = cities.map((c) => c.toLowerCase());
  const cache = [];

  for (let i = 0; i < lowerCities.length; i++) {
    if (cache.includes(lowerCities[i])) {
      let oIdx = cache.indexOf(lowerCities[i]);
      cache.splice(oIdx, 1);
      cache.push(lowerCities[i]);
      result += 1;
    } else {
      if (cache.length >= cacheSize) {
        cache.shift();
      }

      result += 5;
      cache.push(lowerCities[i]);
    }
  }

  return result;
}
