/*
  PROBLEM 005
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

import { recursiveFactorial } from '../helpers';

/*
  Compute the smallest multiple of all numbers from 1 to a given number (num).
  - Upper bound for the multiple is the factorial of "num."
  - While looping through we can increment counter "i" by the given number since the solution must be a
    multiple of this number.
  - Counter "j" checks whether "i" is a factor of the numbers below "num" and if it is able to count up
    to the number without breaking we can return "i".
*/
export const smallestMultiple = (num: number): number => {
  const limit = recursiveFactorial(num);
  for (let i = num; i < limit; i += num) {
    for (let j = 2; j <= num; j++) {
      if (j === num) { return i; }
      if (i % j !== 0) { break; }
    }
  }
  return limit;
};
