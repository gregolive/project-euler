/* 
  PROBLEM 007
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
  What is the 10 001st prime number?
*/

/*
  Compute the nth prime number.
  - Build array "primes" as long as the number of elements in the array is less than "n".
  - We inisitalize "primes" with the only even prime number 2, and then loop through odd numbers, checking
    wether they are prime or not.
  - Return the final element in the array.
*/
export const nthPrime = (n: number): number => {
  const isPrime = (num: number): boolean => {
    if (num < 2 || (num % 2 === 0 && num !== 2)) { return false; }
    for (let i = 3; i <= (num / 2); i += 2) {
      if (num % i === 0) { return false; }
    }
    return true;
  };

  const primes = [2];
  let i = 3;
  while (primes.length < n) {
    if (isPrime(i)) { primes.push(i); }
    i += 2;
  }
  return primes[n - 1];
};
