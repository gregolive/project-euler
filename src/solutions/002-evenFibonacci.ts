/*
  PROBLEM 002
  By considering the terms in the Fibonacci sequence whose values 
  do not exceed four million, find the sum of the even-valued terms.
*/

/*
  Sum the even-valued Fibonacci terms up to given number (num).
  - While the final element in array "terms" is lower than the given number, add new Fibonacci terms by
    summing the final two terms in the array.
  - Filter the array for non-even terms and reduce the array by summing its remaining elements.
*/
export const evenFibonacci = (num: number): number => {
  const terms = [1, 2];
  while (terms[terms.length - 1] <= num) {
    terms.push(terms[terms.length - 1] + terms[terms.length - 2]);
  }
  return terms.filter((t) => t % 2 === 0)
              .reduce((t, sum) => t + sum, 0);
};
