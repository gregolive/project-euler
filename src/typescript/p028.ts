/*
  PROBLEM 028
  What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

/*
  Compute the sum of the diagonals in a spiral of given grid size (size).
*/
export const numSpiralDiagonals = (size: number) : number => {
  let sum = 1;
  let prev = 1;
  for (let i = 1; i <= size / 2; i++) {
    let incr = 2 * i;
    for (let j = 1; j <= 4; j++) {
      const corner = prev + incr * j;
      sum += corner;
      if (j === 4) prev = corner;
    }
  }
  return sum;
};
