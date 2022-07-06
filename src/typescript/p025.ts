/*
  PROBLEM 025
  What is the index of the first term in the Fibonacci sequence to contain 1000 digits?
*/

/*
  Compute the first term in the Fibonacci sequence to contain n digits?
*/
export const nDigitFibonacci = (n: number) => {
  let prev = BigInt(0);
  let curr = BigInt(1);
  let i = 1;
  while (curr.toString().length < n) {
    const temp = curr;
    curr += prev;
    prev = temp;
    i++;
  }
  return i;
};
