/*
  PROBLEM 044
  Find the sum of all 0 to 9 pandigital numbers with this sub-string divisibility property.
*/

export const pentagonNumbers = (): number => {
  const nthPentagonal = (n: number): number => {
    return n * (3 * n - 1) / 2; 
  };
  const isPentagonal = (d: number): boolean => {
    // positive quadratic formula solution
    return (Math.sqrt(24 * d + 1) + 1) / 6 % 1 == 0;
  };

  let d = 0;
  for (let j = 1; j < 5000; j++) {
    const pj = nthPentagonal(j);
    for (let k = j + 1; k < 5000; k++) {
      const diff = nthPentagonal(k) - pj;
      if (diff < d) continue;
      const sum = nthPentagonal(k) + pj;
      if (isPentagonal(sum) && isPentagonal(diff)) {
        d = diff;
      }
    }
  }
  return d;
};
