/* 
  2. By considering the terms in the Fibonacci sequence whose values 
     do not exceed four million, find the sum of the even-valued terms.
*/

export const evenFibonacci = (): number => {
  const terms = [1, 2];
  while (terms[terms.length - 1] <= 4000000) {
    terms.push(terms[terms.length - 1] + terms[terms.length - 2]);
  }
  return terms.filter((num) => num % 2 === 0)
              .reduce((num, sum) => num + sum, 0);
};
