/*
  PROBLEM 049
  What 12-digit number do you form by concatenating the three terms in this arithmetic sequence?
*/

export const primePermutations = (): number => {
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const primesBetween = (min: number, max: number): number[] => {
    const primes = [];
    for (let i = min; i <= max; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  };

  const removedChar = (str: string, char: string): string => {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) return str.substring(0, i) + str.substring(i + 1);
    }
    return str;
  };

  const arePermutations = (str1: string, str2: string, str3: string): boolean => {
    for (let i = 0; i < str1.length; i++) {
      const char = str1.charAt(i);
      if (!str2.includes(char) || !str3.includes(char)) return false;

      str2 = removedChar(str2, char);
      str3 = removedChar(str3, char);
    }
    return true;
  };

  const primes = primesBetween(1000, 9999);
  for (let i = 0; i <= primes.length; i++) {
    const one = primes[i];
    if (one === 1487) continue; // according to problem statement
  
    for (let j = i + 1; j <= primes.length - 2; j++) {
      const two = primes[j];
      const three = two + (two - one);
      if (three > 9999) continue;

      if (primes.includes(three) && arePermutations(one.toString(), two.toString(), three.toString())) {
        return parseInt(one.toString() + two.toString() + three.toString());
      }
    }
  }
  return 0;
};