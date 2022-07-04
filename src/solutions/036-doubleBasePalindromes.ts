/*
  PROBLEM 036
  Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
*/

/*
  Compute the sum of all numbers below given number (num) which are palindromic in base 10 and base 2.
*/
export const doubleBasePalindromes = (num: number): number => {
  const isPalindrome = (num: number | string): boolean => {
    const string = (typeof num === 'number') ? num.toString() : num;
    for (let i = 0; i < (string.length / 2); i++) {
      if (string.charAt(i) !== string.charAt(string.length - 1 - i)) return false;
    }
    return true;
  };
  
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (isPalindrome(i) && isPalindrome(i.toString(2))) sum += i;
  }
  return sum;
};
