/* 
  9. There exists exactly one Pythagorean triplet for which a + b + c = 1000.
     Find the product abc.
*/

const pythagoreanTriplet = (total: number): number[] => {
  for (let i = 1; i <= total - 2; i++) {
    for (let j = 1; j <= total - i - 1; j++) {
      for (let k = 1; k <= total - i - j; k++) {
        if (i + j + k === total && Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) { 
          return [i, j, k]; 
        }
      }
    }
  }
  return [0, 0, 0];
};

export const pythagoreanTripletProd = (total: number): number => {
  const triplet = pythagoreanTriplet(total);
  return triplet.reduce((t, prod) => t * prod, 1);
};
