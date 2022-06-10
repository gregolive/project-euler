/*
  PROBLEM 004
  A palindromic number reads the same both ways.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/

import { isPalindrome } from '../helpers';

/*
  Compute the largest palindrome made from the product of two 3-digit numbers.
*/
export const palindromeProduct = (): number => {
  let product = 0;
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      if (isPalindrome(i * j)) {
        product = (i * j > product) ? i * j : product;
      }
    }
  }
  return product;
};
