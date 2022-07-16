/**
 * p014 - Compute the number under 1 million that produces the longest Collatz sequence chain.
 */
public class p014 {
  
  public static void main(String[] args) {
    System.out.println(new p014().solve());
  }

  public long solve() {
    long chain = 1;
    long chainNum = 1;
    for (int i = 2; i < 1000000; i++) {
      long current = chainLength(i);
      if (current > chain) {
        chain = current;
        chainNum = i;
      }
    }
    return chainNum;
  }

  private static long chainLength(long n) {
    long length = 1;
    while (n > 1) {
      n = (n % 2 == 0) ? (n / 2) : (3 * n + 1);
      length++;
    }
    return length;
  }
}
