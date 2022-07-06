/*
  PROBLEM 004
  A palindromic number reads the same both ways.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/

/*
  Compute the largest palindrome made from the product of two 3-digit numbers.
*/
export const palindromeProduct = (): number => {
  const isPalindrome = (num: number): boolean => {
    const string = num.toString();
    for (let i = 0; i < (string.length / 2); i++) {
      if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
        return false;
      }
    }
    return true;
  };

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
