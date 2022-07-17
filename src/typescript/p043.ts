/*
  PROBLEM 043
  Find the sum of all 0 to 9 pandigital numbers with this sub-string divisibility property.
*/

/*
 p043 - Compute all 0 to 9 pandigital numbers with a substring divisibility property.
*/
export const substringDivisibilty = (): number => {
  const getPermutations = (str: string, frac: string = '', perms: string[] = []): string[] => {
    if (str.length == 0) {
      perms.push(frac);
      return perms;
    }
    for (let i = 0; i < str.length; i++) {
      const ch = str.charAt(i);
      const sub = str.substring(0, i) + str.substring(i + 1);
      perms = getPermutations(sub, frac + ch, perms);
    }
    return perms;
  };
  const hasProperty = (str: string): boolean => {
    const DIV: number[] = [ 2, 3, 5, 7, 11, 13, 17 ];
    for (let i = 0; i < DIV.length; i++) {
      const digs = parseInt(str.substring(i + 1, i + 4));
      if (digs % DIV[i] != 0) return false;
    }
    return true;
  };

  let sum = 0;
  const pand = getPermutations('1234567890');
  for (let i = 0; i < pand.length; i++) {
    const curr = pand[i];
    if (hasProperty(curr)) sum += parseInt(curr);
  }
  return sum;
};
