/**
 * p012 - Compute the first triangle number to have over 500 divisors.
 */
public class p012 {

  public static void main(String[] args) {
    System.out.println(new p012().solve());
  }

  public int solve() {
    final int LIMIT = 500;
    int triangle = 0;
    int i = LIMIT;
    while (true) {
      triangle = nthTriangular(i);
      if (divisorCount(triangle) >= LIMIT) {
        return triangle;
      }
      i++;
    }
  }

  private static int nthTriangular(int n) {
    return n * (n + 1) / 2;
  }

  private static int divisorCount(int n) {
    int divisors = 1;
    for (int i = 1; i <= (n / 2); i++) {
      if (n % i == 0) divisors++;
    }
    return divisors;
  }
}