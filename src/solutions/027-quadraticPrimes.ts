/*
  PROBLEM 028
  Find the product of the coefficients, a and b, for the quadratic expression that produces the
  maximum number of primes for consecutive values of n, starting with n = 0.
*/

import { isPrime } from '../helpers';

/*
  Compute the product of coefficients a and b that produce the maximum number of primes for consecutive
  values of n, where the absolute value of a is < 1000 and the absolute value of b is <= 1000.
*/
export const quadraticPrimes = () => {
  let a = 0;
  let b = 0;
  let max = 0;
  for (let i = -999; i < 1000; i++) {
    for (let j = -1000; j <= 1000; j++) {
      let n = 0;
      while (isPrime(n ** 2 + i * n + j)) n++;
      if (n > max) {
        max = n;
        a = i;
        b = j;
      }
    }
  }
  return a * b;
};
