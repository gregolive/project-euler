/* 
  3. The prime factors of 13195 are 5, 7, 13 and 29.
     What is the largest prime factor of the number 600851475143 ?
*/

import { isPrime } from '../helpers';

export const primeFactor = (num: number): number | null => {
  for (let i = 2; i < (num / 2); i++) {
    if (num % i === 0 && isPrime(num / i)) { return num / i; }
  }
  return null;
};
