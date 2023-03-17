function solution(before, after) {
  const a = {};
  
  for(let s of before){
      a[s] = (a[s] || 0) + 1;
  }
  
  for(let s of after){
      if(!a[s]) return 0;
      a[s] = a[s] - 1;
  }
  
  return 1;
}