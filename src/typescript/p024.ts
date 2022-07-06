/*
  PROBLEM 024
  What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

/*
  Compute the nth lexicographic permutation for a given array 'digits'.
*/
export const nthLexicographicPermutation = (digits: number[], n: number) => {
  // find the nth permutation of 'digits' array
  const nthPermutation = (arr: number[], frac: number[] = [], perms: number[][] = []): number[] => {
    for (let i = 0; i < arr.length; i++) {
      if (perms.length >= n) continue;
      const curr = arr.splice(i, 1);
      if (arr.length === 0) perms.push(frac.concat(curr));
      nthPermutation(arr.slice(), frac.concat(curr), perms);
      arr.splice(i, 0, curr[0]);
    }
    return perms[n - 1];
  };
  // join the array and return integer
  return parseInt(nthPermutation(digits).join(''));
};
