/*
  PROBLEM 026
  Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

/*
  Compute the unit fraction below given number (num) with the longest recurring cycle in its decimal part.
  - Function 'cycleLength' computes the recurring cycle length for a unit fraction with long division.
*/
export const reciprocalCycle = (num: number) => {  
  const cycleLength = (num: number) => {
    if (num % 2 === 0 || num % 5 === 0) return 0;
  
    const prev: number[] = [];
    let remainder = 0;
    while (true) {
      const numerator = (prev.length > 0) ? remainder * 10 : 1;
      if (prev.includes(numerator / num)) break;
      remainder = numerator % num;
      prev.push(numerator / num);
    }
    return prev.length - 1;
  };

  let long = 0;
  let d = 0;
  for (let i = 2; i <= num; i++) {
    const cycle = cycleLength(i);
    if (cycle > long) {
      long = cycle;
      d = i;
    }
  }
  return d;
};
