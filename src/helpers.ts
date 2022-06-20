/*
  Determine if a given number (num) is prime or not.
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
  Determine if a given number (num) is a palindrome or not.
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
  Compute the factorial of given number (num) via loop.
*/
export const factorial = (num: number): number => {
  let fact = 1;
  for (let i = num; i > 1; i--) {
    fact *= i;
  }
  return fact;
};

/*
  Recursively compute the factorial of given number (num).
  - Whenever "num" is greater than 0, mulitply by the number and recursively call the
    function with "num" minus 1.
*/
export const recursiveFactorial = (num: number): number => {
  if (num === 0) { return 1; }
  return num * recursiveFactorial(num - 1);
};

/*
  Compute the bigint factorial of given number (num) via loop.
*/
export const bigintFactorial = (num: number): bigint => {
  let fact = BigInt(1);
  for (let i = num; i > 1; i--) {
    fact *= BigInt(i);
  }
  return fact;
};

/*
  Compute the nth triangular number.
*/
export const nthTriangular = (n: number): number => n * (n + 1) / 2;

/*
  Compute the number of divisors of a given number (num).
*/
export const divisorCount = (num: number): number => {
  let divisors = 1;
  for (let i = 1; i <= (num / 2); i++) {
    if (num % i === 0) { divisors++; }
  }
  return divisors;
};

/*
  Compute the sum of the divisors of a given number (num).
*/
export const divisorSum = (num: number): number => {
  let sum = 1;
  for (let i = 2; i <= (num / 2); i++) {
    if (num % i === 0) { sum += i; }
  }
  return sum;
};

/*
  Compute the sum of the digits of a given number (num).
*/
export const digitSum = (num: number | bigint): number => Array.from(String(num), Number).reduce((n, sum) => n + sum, 0);
