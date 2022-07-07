/**
 * p003 - Compute the largest prime factor of 600851475143.
 */
public class p003 {

  public static void main(String[] args) {
    System.out.println(new p003().solve());
  }

  public Integer solve() {
    long NUM = 600851475143L;
    for (long i = 2; i < (NUM / 2); i++) {
      if (NUM % i == 0 && isPrime(NUM / i)) return (int)(NUM / i);
    }
    return 1;
  }

  private Boolean isPrime(long num) {
    if (num < 2 || (num % 2 == 0 && num != 0)) return false;
    for (int i = 3; i < num; i+=2) {
      if (num % i == 0) return false;
    }
    return true;
  }
}
