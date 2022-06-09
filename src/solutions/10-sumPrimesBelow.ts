/* 
  10. The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
      Find the sum of all the primes below two million.
*/

import { isPrime } from '../helpers';

export const sumPrimesBelow = (num: number): number => {
  let sum = 0;
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) { sum += i; }
  }
  return sum;
};
