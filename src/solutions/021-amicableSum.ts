/*
  PROBLEM 021
  Evaluate the sum of all the amicable numbers under 10,000.
*/

import { divisorSum } from '../helpers';

/*
  Compute the amicable numbers under a given number (num).
  - When an amicable number is found, add it and its amicable pair to arrat 'nums'
    and update counter 'i' to the value of the amicable pair since there will be
    no other pairs between the two.
*/
const amicableNumbers = (num: number): Array<number> => {
  let nums: number[] = [];
  for (let i = 2; i <= num; i++) {
    const sum = divisorSum(i);
    if (sum !== i && divisorSum(sum) === i) {
      nums = [...nums, i, sum];
      i = sum;
    }
  }
  return nums;
};

/*
  Compute the sum of all the amicable numbers under a given number (num).
*/
export const amicableSum = (num: number) => amicableNumbers(num).reduce((n, sum) => sum + n, 0);
