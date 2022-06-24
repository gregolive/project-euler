/*
  PROBLEM 026
  Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

/*
  Compute the unit fraction below given number (num) with the longest recurring cycle in its decimal part.
*/
export const reciprocalCycle = (num: number) => {
  const cycleLength = (num: number) => {
    const deci = (1 / num).toString().slice(2);
    console.log(deci);
    for (let i = 0; i < deci.length; i++) {
      console.log(deci.slice(0, i))
    }
  };
  cycleLength(7);

  /*
  let long = 0;
  let d = 0;
  for (let i = 2; i <= num; i++) {
    const cycle = cycleLength(d);
    if (cycle > long) {
      long = cycle;
      d = i;
    }
  }
  return d;*/
};
