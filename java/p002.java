/**
 * p002 - Sum the even-valued Fibonacci terms up to 4 million.
 */
public final class p002 {

  public static void main(String[] args) {
    System.out.println(new p002().solve());
  }

  public Integer solve() {
    int a = 1;
    int b = 2;
    int sum = 2;
    while (a <= 4000000) {
      int temp = b;
      b += a;
      a = temp;
      if (b % 2 == 0) sum += b;
    }
    return sum;
  }
}
