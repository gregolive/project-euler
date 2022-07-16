import java.util.ArrayList;
import java.lang.Math;

/**
 * p046 - Compute the smallest odd composite that cannot be written as the sum of a prime and twice a square?
 */
public class p046 {

  public static void main(String[] args) {
    System.out.println(new p046().solve());
  }

  public int solve() {
    primes.add(2);

    int i = 1;
    while (true) {
      i += 2; // ensure odd
      if (isPrime(i)) {
        primes.add(i);
        continue;
      }

      if (!followsConjecture(i)) return i;
    }
  }

  private static boolean isPrime(int n) {
    for (int i = 3; i < n; i += 2) {
      if (n % i == 0) return false;
    }
    return true;
  }

  private static ArrayList<Integer> primes = new ArrayList<Integer>();

  private static boolean followsConjecture(int comp) {
    for (int j = 0; j < primes.size(); j++) {
      int prime = primes.get(j);
      if (Math.sqrt((comp - prime) / 2) % 1 == 0) {
        return true; // odd composite can be made from the sum of a prime and twice a square
      }
    }
    return false;
  }
}