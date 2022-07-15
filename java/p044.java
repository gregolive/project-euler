import java.lang.Math;

/**
 * p044 - Compute the value of D for pair of pentagonal numbers, Pj and Pk, for which 
 *        their sum and difference are pentagonal and D = |Pk − Pj| is minimised.
 */
public class p044 {
  
  public static void main(String[] args) {
    System.out.println(new p044().solve());
  }

  public long solve() {
    long d = 0;
    for (int j = 1; j < 5000; j++) {
      long pj = nthPentagonal(j);
      for (int k = j + 1; k < 5000; k++) {
        long diff = nthPentagonal(k) - pj;
        if (diff < d) continue;
        long sum = nthPentagonal(k) + pj;
        if (isPentagonal(sum) && isPentagonal(diff)) {
          d = diff;
        }
      }
    }
    return d;
  }

  private static long nthPentagonal(int n) {
    return n * (3 * n - 1) / 2; 
  }

  private static boolean isPentagonal(long d) {
    // positive quadratic formula solution
    return (double)(Math.sqrt(24 * d + 1) + 1) / 6 % 1 == 0;
  }
}
