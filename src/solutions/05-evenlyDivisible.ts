/* 
  5. 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
     What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

export const factorial = (num: number): number => {
  if (num < 0) { return -1; }
  if (num === 0) { return 1; }
  return num * factorial(num - 1);
};

export const smallestEvenlyDivisible = (num: number): number => {
  const limit = factorial(num);
  for (let i = num; i < limit; i+=num) {
    for (let j = 2; j <= num; j++) {
      if (i % j !== 0) {
        break;
      } else if (j === num) {
        return i;
      }
    }
  }
  return limit;
};
