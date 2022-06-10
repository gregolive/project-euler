/* 
  6. Find the difference between the sum of the squares of the first 
     one hundred natural numbers and the square of the sum.
*/

const sumOfSquares = (num: number): number => {
  if (num < 1) { return 0; }
  return Math.pow(num, 2) + sumOfSquares(num - 1);
};

const squareOfSums = (num: number): number => {
  const sum = [...Array(num).keys()].reduce((n, sum) => n + sum, 0);
  return Math.pow(sum, 2);
};

export const sumSquareDifference = (num: number): number => squareOfSums(num) - sumOfSquares(num);
