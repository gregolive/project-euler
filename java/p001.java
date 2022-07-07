/**
 * p001 - Sum the multiples of 3 and 5 up 1000.
 */
public final class p001 {

  public static void main(String[] args) {
    System.out.println(new p001().solve());
  }

  public int solve() {
    int sum = 0;
    for (int i = 3; i < 1000; i++) {
      if (i % 3 == 0 || i % 5 == 0) sum += i;
    }
    return sum;
  }
}
