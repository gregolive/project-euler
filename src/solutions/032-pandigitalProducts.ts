/*
  PROBLEM 032
  Find the sum of all products whose multiplicand/multiplier/product identity
  can be written as a 1 through 9 pandigital.
*/

/*
  Compute the sum of all the pandigital products for 1 to 9.
*/
export const pandigitalProducts = () => {
  const pandigital = (num: number): number | null => {
    for (let i = 2; i < (num / 4); i++) {
      if (num % i === 0 && num / i !== i) {
        const group = i.toString() + (num / i).toString() + num.toString();
        if (group.length === 9 && !group.includes('0') && (new Set(group)).size === group.length)
          return num;
      }
    }
    return null;
  };

  let sum = 0;
  for (let i = 1; i < 10000; i++) {
    const pan = pandigital(i);
    if (pan) sum += pan;
  }
  return sum;
};
