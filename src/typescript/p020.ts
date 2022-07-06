/*
  PROBLEM 020
  Find the sum of the digits in the number 100!
*/

/*
  Compute the sum of the digits of the factorial of given number (num).
*/
export const factorialDigitSum = (num: number): number => {
  const digitSum = (num: number | bigint): number => Array.from(String(num), Number).reduce((n, sum) => n + sum, 0);
  const bigintFactorial = (num: number): bigint => {
    let fact = BigInt(1);
    for (let i = num; i > 1; i--) {
      fact *= BigInt(i);
    }
    return fact;
  };
  
  return digitSum(bigintFactorial(num));
};
