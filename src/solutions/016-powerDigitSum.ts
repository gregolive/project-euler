/*
  PROBLEM 016
  What is the sum of the digits of the number 2^1000?
*/

import { digitSum } from '../helpers';

/*
  Compute the sum of the digits of 2 to the nth power with BigInt.
*/
export const powerDigitSum = (n: number): number => digitSum(BigInt(2 ** n));
