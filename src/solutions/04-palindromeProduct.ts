/* 
  4. A palindromic number reads the same both ways.
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
