/*
  PROBLEM 047
  Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
*/

/*
  Compute the first of 4 consecutive integers to have four distinct prime factors.
*/
export const distinctPrimeFactors = (): number => {
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const getPrimes = (max: number, memo: number[] = []): number[] => {
    const start = (memo.length > 0) ? memo[memo.length - 1] : 1;
    for (let i = start + 1; i <= max; i++) {
      if (isPrime(i)) memo.push(i);
    }
    return memo;
  };

  const hasThreeFactors = (n: number, check: number[]): boolean => {
    let factors = 0;
    for (let i = 0; i < check.length; i++) {
      if (n % check[i] === 0) factors++;
      if (factors >= 4) return true;
    }
    return false;
  };

  let nums: number[] = [];
  let primes: number[] = [];
  let i = 644;
  while (nums.length < 4) {
    i++;
    primes = getPrimes((i / 2), primes);
    if (hasThreeFactors(i, primes)) {
      nums.push(i);
      continue;
    }
    nums = [];
  }
  return nums[0];
};
