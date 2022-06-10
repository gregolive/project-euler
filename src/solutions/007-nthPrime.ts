/* 
  7. By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
     What is the 10 001st prime number?
*/

import { isPrime } from '../helpers';

export const nthPrime = (num: number): number => {
  const primes = [2];
  let i = 1;
  while (primes.length < num) {
    i += 2;
    if (isPrime(i)) { primes.push(i); }
  }
  return primes[num - 1];
};
