function solution(my_string) {
  let result = 0;
  let m = false;
  my_string.split(' ').map((v) => {
    const nan = isNaN(v);

    if (!nan && m) {
      result += -parseInt(v);
      m = false;
    } else if (!nan) {
      result += parseInt(v);
      m = false;
    } else {
      m = true;
      m = v === '-' ? true : false;
    }
  });

  return result;
}
