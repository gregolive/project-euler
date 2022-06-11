/*
  PROBLEM 012
  What is the value of the first triangle number to have over five hundred divisors?
*/

import { nthTriangular, divisorCount } from '../helpers';

/*
  Compute the first triangle number to have a given number of divisors (d).
  - Counter "i" is used to increment triangular numbers and we assume that with a given 
    number of divisors above 20, that "i" can be initialized for the "d"th triangular number.
*/
export const divisibleTriangular = (d: number): number => {
  let triangle: number;
  let i = (d > 20) ? d : 1;
  while (true) {
    triangle = nthTriangular(i);
    if (divisorCount(triangle) >= d) {
      return triangle;
    }
    i++;
  }
};
