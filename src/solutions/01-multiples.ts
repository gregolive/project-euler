/* 
  1. Find all the sum of all multiples of 3 and 5 below 1000.
*/

export const sumMultiples = (): number => {
  const numbers = [...Array(1000).keys()];
  return numbers.filter((num) => num % 3 === 0 || num % 5 === 0)
                .reduce((num, sum) => num + sum, 0);
};
