/**
 * p010 - Compute the sum of the prime numbers below 2 million.
 */
public final class p010 {

  public static void main(String[] args) {
    System.out.println(new p010().solve());
  }

  public long solve() {
    long sum = 2;
    for (int i = 3; i < 2000000; i += 2) {
      if (isPrime(i)) sum += i;
    }
    return sum;
  }

  private static boolean isPrime(int n) {
    if (n % 2 == 0) return false;
    for (int i = 3; i < n; i += 2) {
      if (n % i == 0) return false;
    }
    return true;
  }
}
