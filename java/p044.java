import java.lang.Math;

/**
 * p044 - Compute the value of D for pair of pentagonal numbers, Pj and Pk, for which 
 *        their sum and difference are pentagonal and D = |Pk − Pj| is minimised.
 */
public class p044 {
  
  public static void main(String[] args) {
    System.out.println(new p044().solve());
  }

  public int solve() {
    int d = 0;
    for (int j = 1; j < 10000; j++) {
      int pj = nthPentagonal(j);
      for (int k = j + 1; k < 10000; k++) {
        int diff = nthPentagonal(k) - pj;
        if (diff < d) continue;
        int sum = nthPentagonal(k) + pj;
        if (isPentagonal(sum) && isPentagonal(diff)) {
          d = diff;
        }
      }
    }
    return d;
  }

  private static int nthPentagonal(int n) {
    return n * (3 * n - 1) / 2; 
  }

  private static boolean isPentagonal(int d) {
    return (double)(Math.sqrt(24 * d + 1) + 1) / 6 % 1 == 0;
  }
}
