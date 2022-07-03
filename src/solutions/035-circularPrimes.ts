/*
  PROBLEM 035
  How many circular primes are there below one million?
*/

/*
  Compute the number of circular primes below given number (num).
*/
export const circularPrimes = (num: number): number => {
  const isPrime = (num: number): boolean => {
    if (num < 1 || (num % 2 === 0 && num !== 2)) return false;
    for (let i = 3; i <= (num / 2); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const rotations = (num: number) => {
    const str = num.toString();
    const r: number[] = [];
    for (let i = 1; i < str.length; i++) {
      const start = str.slice(0, i - str.length);
      const end = str.slice(i + 1)
      r.push(parseInt(str.charAt(i) + end + start));
    }
    return r;
  };

  let count = 0;
  for (let i = 2; i < 1000000; i++) {
    if (isPrime(i)) {
      const p = rotations(i);
      const allPrime = p.every((arr) => isPrime(arr));
      if (allPrime) count++;
    }
  }
  return count;
};
