/* 
  6. Find the difference between the sum of the squares of the first 
     one hundred natural numbers and the square of the sum.
*/

const sumOfSquares = (num: number): number => {
  if (num < 1) { return 0; }
  return Math.pow(num, 2) + sumOfSquares(num - 1);
};

const squareOfSums = (num: number): number => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return Math.pow(sum, 2);
};

export const sumSquareDifference = (num: number): number => squareOfSums(num) - sumOfSquares(num);
