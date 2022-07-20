/*
  PROBLEM 050
  Which prime, below one-million, can be written as the sum of the most consecutive primes?
*/

/*
  Compute the prime below given number (max) that can be written as the sum of the most consecutive primes.
*/
export const consecutivePrimeSum = (max: number) => {
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const primesBelow = (max: number): number[] => {
    const primes = [];
    for (let i = 2; i < max; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  };

  let primes = primesBelow(max);
  let chainLen = 0;
  let chainSum = 0;
  for (let i = 0; i < primes.length; i++) {
    let sum = 0;
    for (let j = i; j < primes.length; j++) {
      sum += primes[j];
      if (sum > max) break;

      if (isPrime(sum) && j - i > chainLen) {
        chainLen = j - i;
        chainSum = sum;
      }
    }
  }
  return chainSum;
};
