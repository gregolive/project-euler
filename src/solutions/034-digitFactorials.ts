/*
  PROBLEM 034
  Find the sum of all numbers which are equal to the sum of the factorial of their digits.
*/

/*
  Compute the sum of all numbers equal to the sum of their digit factorial.
  - Assume all will be 2 to 5 digits.
*/
export const digitFactorials = (): number => {
  const factorial = (num: number): number => {
    let fact = 1;
    for (let i = num; i > 1; i--) fact *= i;
    return fact;
  };

  let sum = 0;
  for (let i = 10; i < 99999; i++) {
    const factSum = i.toString().split('').reduce((sum, n) => factorial(parseInt(n)) + sum, 0);
    if (factSum === i) sum += i;
  }
  return sum;
};
