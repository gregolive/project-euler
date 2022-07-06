/*
  PROBLEM 039
  If p is the perimeter of a right angle triangle with integral length sides, {a,b,c},
  for which value of p ≤ 1000, is the number of solutions maximised?
*/

/*
  Compute the perimeter up to number (num) that can generate the maximum number of
  right angle triangles.
*/
export const integerRightTriangles = (num: number): number => {
  const isRightAngle = (a: number, b: number, c: number): boolean => (a ** 2 + b ** 2 === c ** 2);

  let maxP = 4; // a = 1, b = 1, c = 2 is the first solution
  let maxSols = 1;
  for (let p = 5; p <= num; p++) {
    let sols = 0;
    for (let a = 1; a < (p - 3); a++) {
      for (let b = 1; b < (p - a - 2); b++) {
        if (isRightAngle(a, b, (p - (a + b)))) sols++;
      }
    }
    if (sols > maxSols) {
      maxP = p;
      maxSols = sols;
    }
  }
  return maxP;
};
