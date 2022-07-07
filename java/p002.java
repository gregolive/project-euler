/**
 * p002 - Sum the even-valued Fibonacci terms up to 4 million.
 */
public final class p002 {

  public static void main(String[] args) {
    System.out.println(new p002().solve());
  }

  public Integer solve() {
    int one = 1;
    int two = 2;
    int sum = 2;
    while (one <= 4000000) {
      int temp = two;
      two += one;
      one = temp;
      if (two % 2 == 0) sum += two;
    }
    return sum;
  }
}
