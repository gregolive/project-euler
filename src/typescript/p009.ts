/* 
  9. There exists exactly one Pythagorean triplet for which a + b + c = 1000.
     Find the product abc.
*/

/*
  Compute the product of the Pythagorean triplet for which a + b + c equals given "total."
  - Return null if no such triplet exists.
*/
export const pythagoreanTripletProd = (total: number): number | null => {
  /*
    Compute the Pythagorean triplet.
    - Three loops with counter "i" that maxes out at "total" - 2, counter "j" that maxes out at
      "total" - "i" - 1, and counter "k" that maxes out at "total" - "i" - "j".
    - If the sum of the counters equals "total" and they are a valid Pythagorean Triplet, return
      the triplet as an array.
    - We check the Pythagorean Triplet with "i" as c since it is the largest in the early loops.
  */
  const pythagoreanTriplet = (total: number): number[] | null => {
    for (let i = 1; i <= total - 2; i++) {
      for (let j = 1; j <= total - i - 1; j++) {
        for (let k = 1; k <= total - i - j; k++) {
          if (i + j + k === total && Math.pow(j, 2) + Math.pow(k, 2) === Math.pow(i, 2)) { 
            return [i, j, k]; 
          }
        }
      }
    }
    return null;
  };

  const triplet = pythagoreanTriplet(total);
  return (triplet) ? triplet.reduce((t, prod) => t * prod, 1) : null;
};
