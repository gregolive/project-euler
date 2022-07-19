/*
  PROBLEM 048
  Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
*/

/*
  Computes the last 10 digits of the sum of the self power series up to given power (pwr).
*/
export const selfPowers = (pwr: number): number => {
  let sum = BigInt(1);
  for (let i = 2; i <= pwr; i++) {
    sum += (BigInt(i) ** BigInt(i));
  }
  const str = sum.toString();
  return parseInt(str.substring(str.length - 10, str.length));
};
