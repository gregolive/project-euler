/**
 * p006 - Compute the difference between the sum of the squares up 
 *        and the square of the sum of the first 100 natural numbers.
 */
public final class p006 {
  
  public static void main(String[] args) {
    System.out.println(new p006().solve());
  }

  public int solve() {
    //System.out.println(squareOfSums(100));
    //System.out.println(sumOfSquares(100));
    return squareOfSums(100) - sumOfSquares(100);
  }

  private static int sumOfSquares(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) sum += Math.pow(i, 2);
    return sum;
  }

  private static int squareOfSums(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) sum += i;
    return (int)Math.pow(sum, 2);
  }
}
