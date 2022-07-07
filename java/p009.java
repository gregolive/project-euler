import java.util.NoSuchElementException;

/**
 * p009 - Compute the product of the Pythagorean triplet for which a + b + c = 1000.
 */
public final class p009 {
  
  public static void main(String[] args) {
    System.out.println(new p009().solve());
  }

  public int solve() {
    for (int i = 1; i < ANSWER; i++) {
      for (int j = i + 1; j < ANSWER; j++) {
        int k = ANSWER - i - j;
        if (k * k == i * i + j * j) return i * j * k;
      }
    }
    throw new NoSuchElementException();
  }

  private final static int ANSWER = 1000;
}
