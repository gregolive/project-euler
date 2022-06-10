/* 
  10. The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
      Find the sum of all the primes below two million.
*/

import { isPrime } from '../helpers';

export const sumPrimesBelow = (num: number): number => {
  if (num < 2) { return 0; }
  let sum = 2;
  for (let i = 3; i < num; i += 2) {
    if (isPrime(i)) { sum += i; }
  }
  return sum;
};