/*
  PROBLEM 001
  Find all the sum of all multiples of 3 and 5 below 1000.
*/

/*
  Sum the multiples of 3 and 5 up to a given number (num).
  - Create array "numbers" of all number from zero to "num."
  - Filter the array of any number that has a non-zero remandinder when divided by 3 or 5.
  - Reduce the remaining array by summing all elements.
*/
export const sumMultiples = (num: number): number => {
  const numbers = [...Array(num).keys()];
  return numbers.filter((n) => n % 3 === 0 || n % 5 === 0)
                .reduce((n, sum) => n + sum, 0);
};
