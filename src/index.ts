import { sumMultiples } from './solutions/01-multiples';
import { evenFibonacci } from './solutions/02-evenFibonacci';
import { primeFactor } from './solutions/03-primeFactor';
import { palindromeProduct } from './solutions/04-palindromeProduct';
import { smallestMultiple } from './solutions/05-smallestMultiple';
import { sumSquareDifference } from './solutions/06-sumSquareDifference';
import { nthPrime } from './solutions/07-nthPrime';

console.log(`
  1. The sum of all multiples of 3 and 5 below 1000: ${sumMultiples(1000)}
  2. The sum of the even-valued Fibonacci terms below 4 million: ${evenFibonacci(4000000)}
  3. The largest prime factor of the number 600851475143: ${primeFactor(600851475143)}
  4. The largest palindrome made from the product of two 3-digit numbers: ${palindromeProduct()}
  5. The smallest positive number that is evenly divisible by all of the numbers from 1 to 20: ${smallestMultiple(20)}
  6. The difference between the sum of the squares of the first 100 natural numbers and the square of the sum: ${sumSquareDifference(100)}
  7. The 10,001st prime number: ${nthPrime(10001)}
`);
