/*
  PROBLEM 023
  Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

import { divisorSum } from '../helpers';

export const nonAbundantSums = () => {
  const UPPER = 28123;
  // collect abundant numbers
  const abundant: number[] = [];
  for (let i = 1; i <= UPPER; i++) {
    if (divisorSum(i) > i) abundant.push(i);
  }

  // collect abundant sums
  let abundantSums: number[] = [];
  for (let i = 0; i < abundant.length; i++) {
    for (let j = 0; j <= i; j++) abundantSums.push(abundant[i] + abundant[j]);
  }
  abundantSums = [...new Set(abundantSums)]; // remove duplicates

  // collect non-abundant numbers
  const nonAbundant: number[] = [];
  for (let i = 1; i <= UPPER; i++) {
    if (!abundantSums.includes(i)) nonAbundant.push(i);
  }

  return nonAbundant.reduce((n, sum) => n + sum, 0);
};
