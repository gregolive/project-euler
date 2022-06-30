/*
  PROBLEM 014
  Which starting number, under one million, produces the longest chain?
*/

/*
  Compute the number between zero and given number (num) that produces the longest Collatz
  sequence chain.
  - Loop through all numbers and if the current counter "i" produces a longer chain than the
    current longest chain (chain), update "chain" and the number that produced the longest
    chain (chainNum).
*/
export const collatzSeq = (num: number): number => {
  const chainLength = (num: number): number => {
    let length = 1;
    while (num > 1) {
      num = (num % 2 === 0) ? num / 2 : 3 * num + 1;
      length++;
    }
    return length;
  };

  let chain = 1;
  let chainNum = 1;
  for (let i = 2; i <= num; i++) {
    const current = chainLength(i);
    if (current > chain) {
      chain = current;
      chainNum = i;
    }
  }
  return chainNum;
};
