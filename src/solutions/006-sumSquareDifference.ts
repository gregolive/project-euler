/*
  PROBLEM 006
  Find the difference between the sum of the squares of the first 
  one hundred natural numbers and the square of the sum.
*/

/*
  Recursively compute the sum of squares up to number (num).
  - If "num" is below zero recursively call the function with "num" minus one, multiplied by
    "num" squared. 
*/
const sumOfSquares = (num: number): number => {
  if (num < 1) { return 0; }
  return Math.pow(num, 2) + sumOfSquares(num - 1);
};

/*
  Compute the square of the sum of numbers up to number (num).
  - Create an array from zero to "num" and reduce the array to find the sum, return the square.
*/
const squareOfSums = (num: number): number => {
  const sum = [...Array(num).keys()].reduce((n, sum) => n + sum, 0);
  return Math.pow(sum, 2);
};

/*
  Compute the difference between the sum of the squares up to a given number (num) and the square
  of the sum up to the number.
*/
export const sumSquareDifference = (num: number): number => squareOfSums(num) - sumOfSquares(num);
