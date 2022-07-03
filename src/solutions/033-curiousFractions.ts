/*
  PROBLEM 033
  There are exactly four non-trivial examples of this type of fraction, less than one
  in value, and containing two digits in the numerator and denominator. If the product
  of these four fractions is given in its lowest common terms, find the denominator.
*/

/*
  Computes the 4 non-trivial, double-digit, curious fractions and returns the product
  of their lowerst common denominators.
*/
export const curiousFractions = () => {
  const isCurious = (n: number, d: number) => {
    const nArr = n.toString().split('').map(Number);
    const dArr = d.toString().split('').map(Number);
    if (nArr[1] === dArr[0] && n / d === nArr[0] / dArr[1]) return true;
    return false;
  };

  let prod = 1;
  for (let i = 10; i < 100; i++) {
    for (let j = 10; j < i; j++) {
      if (isCurious(j, i)) prod *= (1 / (j / i));
    }
  }
  return prod;
};
