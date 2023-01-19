function solution(sides) {
  sides.sort();
  return sides[sides.length - 1] < sides[0] + sides[1] ? 1 : 2;
}
