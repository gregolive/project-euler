/*
  PROBLEM 029
  How many distinct terms are in the sequence generated by a^b for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?
*/

/*
  Compute the number of distinct terms generated by a^b.
*/
export const integerCombinations = (a: number, b: number): number => {
  const combos: number[] = [];
  for (let i = 2; i <= a; i++) {
    for (let j = 2; j <= b; j++) combos.push(i ** j);
  }
  const unique = [...new Set(combos)]; // remove duplicates
  return unique.length;
};
