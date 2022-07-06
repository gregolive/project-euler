/*
  PROBLEM 041
  What is the largest n-digit pandigital prime that exists?
*/

/*
  Computes the largest pandigital prime.
*/
export const pandigitalPrime = () => {
  const isPandigital = (num: number): boolean => {
    const str = num.toString();
    const set = [ ...new Set(str) ].map(Number);
    return (!str.includes('0') && (Math.max(...set) <= str.length) && (set.length === str.length));
  }
  const isPrime = (num: number): boolean => {
    if (num < 2 || (num % 2 === 0 && num !== 2)) return false;
    for (let i = 3; i <= (num / 2); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let i = 987654321;
  let pan = 1;
  while (pan === 1) {
    if (isPandigital(i) && isPrime(i)) pan = i;
    i -= 2;
  }
  return pan;
};
