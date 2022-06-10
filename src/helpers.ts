/*
  Determines if a given number (num) is prime or not.
  - If the number is less than 2 or divisible by 2 (but not 2), return false.
  - Divide the number by all odd numbers (already divided by even numbers above) up to
    half of "num" (no number greater than half the target number will be a factor) and
    return false if the remainder is zero.
  - Otherwise the number is prime.
*/
export const isPrime = (num: number): boolean => {
  if (num < 2 || (num % 2 === 0 && num !== 2)) { return false; }
  for (let i = 3; i <= (num / 2); i += 2) {
    if (num % i === 0) { return false; }
  }
  return true;
};

/*
  Determines if a given number (num) is a palindrome or not.
  - Convert the number to a string and for each element in the first half of the string,
  check whether element on the opposite half is the same. If not return false.
*/
export const isPalindrome = (num: number): boolean => {
  const string = num.toString();
  for (let i = 0; i < (string.length / 2); i++) {
    if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
      return false;
    }
  }
  return true;
};

/*
  Recursively computes the factorial of given number (num).
  - Whenever "num" is greater than 0, mulitply by the number and recursively call the
    function with "num" minus 1.
*/
export const factorial = (num: number): number => {
  if (num < 0) { return -1; }
  if (num === 0) { return 1; }
  return num * factorial(num - 1);
};
