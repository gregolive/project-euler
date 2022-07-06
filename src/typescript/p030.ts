/*
  PROBLEM 030
  Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/

/*
  Compute the numbers that can be written as the sum of of fifth power of their digits,
  assuming that all numbers will be 6 digits or less and ignoring 1.
*/
export const digitFifthPowers = (): number => {
  const digitsFifthPwr = (num: number): number => 
    num.toString().split('').reduce((sum, n) => (parseInt(n) ** 5) + sum, 0);

  const numbers: number[] = [];
  for (let i = 2; i < 999999; i++) {
    if (i === digitsFifthPwr(i)) numbers.push(i);
  }
  return numbers.reduce((n, sum) => n + sum, 0);
};
