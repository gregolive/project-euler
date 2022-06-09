// Determines if a number is prime or not.
export const isPrime = (num: number): boolean => {
  if (num <= 1 || (num % 2 === 0 && num !== 2)) { return false; }
  for (let i = 3; i <= (num / 2); i++) {
    if (num % i === 0) { return false; }
  }
  return true;
};

// Determines if a number is a palindrome or not.
export const isPalindrome = (num: number): boolean => {
  const string = num.toString();
  for (let i = 0; i < (string.length / 2); i++) {
    if (string.charAt(i) !== string.charAt(string.length - 1 - i)) {
      return false;
    }
  }
  return true;
};

// Recursively computes the factorial of number.
export const factorial = (num: number): number => {
  if (num < 0) { return -1; }
  if (num === 0) { return 1; }
  return num * factorial(num - 1);
};
