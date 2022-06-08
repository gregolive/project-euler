/* 
  7. By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
     What is the 10 001st prime number?
*/

const hasTwoFactors = (num: number): boolean => {
  if (num % 2 == 0) { return false; }
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) { return false; }
  }
  return true;
};

export const nthPrime = (num: number): number => {
  const primes: Array<number> = [2];
  let i = 2;
  while (primes.length < num) {
    i++;
    if (hasTwoFactors(i)) { primes.push(i); }
  }
  return primes[num - 1];
};
