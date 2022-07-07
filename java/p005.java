/**
 * p005 - Compute the smallest multiple of all numbers from 1 to 20.
 */
public final class p005 {
  
  public static void main(String[] args) {
    System.out.println(new p005().solve());
  }

  public Integer solve() {
    final long LIMIT = factorial(20);
    for (int i = 20; i < LIMIT; i += 20) {
      for (int j = 2; j <= 20; j++) {
        if (j == 20) return i;
        if (i % j != 0) break;
      }
    }
    return (int)LIMIT;
  }

  private static Long factorial(int n) {
    long f = n;
    for (int i = (n - 1); i > 1; i--) f *= i;
    return f;
  }
}
