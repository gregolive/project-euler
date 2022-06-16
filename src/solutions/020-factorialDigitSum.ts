/*
  PROBLEM 020
  Find the sum of the digits in the number 100!
*/

import { bigintFactorial, digitSum } from '../helpers';

/*
  Compute the sum of the digits of the factorial of given number (num).
*/
export const factorialDigitSum = (num: number): number => digitSum(bigintFactorial(num));
