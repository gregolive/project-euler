/*
  PROBLEM 037
  Find the sum of the only eleven primes that are both truncatable from left to right and right to left.
*/

/*
  Compute the sum of the eleven truncatable primes.
*/
export const trunctablePrimes = (): number => {
  const isPrime = (num: number): boolean => {
    if (num < 2 || (num % 2 === 0 && num !== 2)) return false;
    for (let i = 3; i <= (num / 2); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const isTrunctablePrime = (num: number): boolean => {
    let left = num.toString();
    while (left.length > 0) {
      left = left.slice(1, left.length);
      if (!isPrime(parseInt(left))) return false;
    }
    let right = num.toString();
    while (right.length > 0) {
      right = right.slice(0, right.length - 1);
      if (!isPrime(parseInt(right))) return false;
    }
    return true;
  };

  const TRUNCATABLE = 11; // given by problem statement
  const primes: number[] = [];
  let i = 10; // must be 2 digits or more
  while (primes.length < TRUNCATABLE) {
    if (isPrime(i) && isTrunctablePrime(i)) primes.push(i);
    i++;
  }
  return primes.reduce((n, sum) => n + sum, 0);
};
