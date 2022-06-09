/* 
  5. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

import { factorial } from '../helpers';

export const smallestMultiple = (num: number): number => {
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
