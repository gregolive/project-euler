import { sumMultiples } from './solutions/01-multiples';
import { evenFibonacci } from './solutions/02-evenFibonacci';

console.log(`
  1. The sum of all multiples of 3 and 5 below 1000: ${sumMultiples()}
  2. The sum of the even-valued Fibonacci terms below 4 million: ${evenFibonacci()}
`);