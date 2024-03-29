/*
  PROBLEM 003
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
*/

/*
  Compute the largest prime factor of a given number (num).
  - Starting at 2, loop and divide the number by counter "i" up to half of "num" (since there will be no
    factors greater than half the number).
  - We start by dividing by low numbers so we can check if the counter is a factor and if it's
    complementary factor is prime, since the complementary factor will be larger on the earlier loops.
*/
export const primeFactor = (num: number): number | null => {
  const isPrime = (num: number): boolean => {
    if (num < 2 || (num % 2 === 0 && num !== 2)) { return false; }
    for (let i = 3; i <= (num / 2); i += 2) {
      if (num % i === 0) { return false; }
    }
    return true;
  };

  for (let i = 2; i < (num / 2); i++) {
    if (num % i === 0 && isPrime(num / i)) { return num / i; }
  }
  return null;
};
