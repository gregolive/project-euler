/* 
  4. A palindromic number reads the same both ways. The largest palindrome made 
     from the product of two 2-digit numbers is 9009 = 91 × 99.
     Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = (num: number): boolean => {
  const string = num.toString();
  for (let i = 0; i < (string.length / 2); i++) {
    if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
      return false;
    }
  }
  return true;
};

export const largestPalindrome = (): number => {
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
