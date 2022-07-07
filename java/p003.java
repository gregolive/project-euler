/**
 * p003 - Compute the largest prime factor of 600851475143.
 */
public final class p003 {

  public static void main(String[] args) {
    System.out.println(new p003().solve());
  }

  public Integer solve() {
    final long NUM = 600851475143L;
    for (long i = 2; i < (NUM / 2); i++) {
      if (NUM % i == 0 && isPrime(NUM / i)) return (int)(NUM / i);
    }
    return 1;
  }

  private static Boolean isPrime(long n) {
    if (n < 2 || (n % 2 == 0 && n != 0)) return false;
    for (int i = 3; i < n; i+=2) {
      if (n % i == 0) return false;
    }
    return true;
  }
}
