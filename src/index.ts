import { sumMultiples } from './solutions/01-multiples';
import { evenFibonacci } from './solutions/02-evenFibonacci';
import { largestPrimeFactor } from './solutions/03-primeFactor';
import { largestPalindrome } from './solutions/04-largestPalindrome';
import { smallestEvenlyDivisible } from './solutions/05-evenlyDivisible';

console.log(`
  1. The sum of all multiples of 3 and 5 below 1000: ${sumMultiples(1000)}
  2. The sum of the even-valued Fibonacci terms below 4 million: ${evenFibonacci(4000000)}
  3. The largest prime factor of the number 600851475143: ${largestPrimeFactor(600851475143)}
  4. The largest palindrome made from the product of two 3-digit numbers: ${largestPalindrome()}
  5. The smallest positive number that is evenly divisible by all of the numbers from 1 to 20: ${smallestEvenlyDivisible(20)}
`);
