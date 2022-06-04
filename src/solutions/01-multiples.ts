/* 
  1. Find all the sum of all multiples of 3 and 5 below 1000.
*/

export const sumMultiples = (num: number): number => {
  const numbers = [...Array(num).keys()];
  return numbers.filter((n) => n % 3 === 0 || n % 5 === 0)
                .reduce((n, sum) => n + sum, 0);
};
