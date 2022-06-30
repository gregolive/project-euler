/*
  PROBLEM 031
  How many different ways can £2 be made using any number of coins?
*/

/*
  Recursively compute the number of ways to make a given number of pence (pence)
  with the eight British coins in general circulation.
  - Ref: https://andrew.neitsch.ca/publications/m496pres1.nb.pdf
*/
export const coinCombinations = (pence: number): number => {
  const COINS = [1, 2, 5, 10, 20, 50, 100, 200];
  const getCombos = (pence: number, k: number): number => {
    if (pence < 0 || k < 0) return 0;
    if (pence === 0) return 1;
    return getCombos(pence, k - 1) + getCombos(pence - COINS[k], k);
  };

  return getCombos(pence, COINS.length - 1);
};
