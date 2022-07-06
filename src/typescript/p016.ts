/*
  PROBLEM 016
  What is the sum of the digits of the number 2^1000?
*/

/*
  Compute the sum of the digits of 2 to the nth power with BigInt.
*/
export const powerDigitSum = (n: number): number => {
  const digitSum = (num: bigint): number => Array.from(String(num), Number).reduce((n, sum) => n + sum, 0);
  return digitSum(BigInt(2 ** n));
};
