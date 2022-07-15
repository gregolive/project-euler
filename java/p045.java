import java.lang.Math;

/**
 * p044 - Compute the triangle number after 40755 that is also pentagonal and hexagonal.
 */
public class p045 {
  
  public static void main(String[] args) {
    System.out.println(new p045().solve());
  }

  public long solve() {
    int n = 144; // 40755 is the 143rd hexagonal
    while (true) {
      long hex = nthHexagonal(n);
      if (isPentagonal(hex) && isTriangular(hex)) {
        return hex;
      }
      n++;
    }
  }

  private static int nthHexagonal(int n) {
    return n * (2 * n - 1);
  }

  // positive quadratic formula solutions

  private static boolean isTriangular(long n) {
    return (double)(Math.sqrt(8 * n + 1) - 1) / 2 % 1 == 0;
  }

  private static boolean isPentagonal(long n) {
    return (double)(Math.sqrt(24 * n + 1) + 1) / 6 % 1 == 0;
  }
}
