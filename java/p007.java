/**
 * p007 - Compute the 10,001st prime number.
 */
public final class p007 {

  public static void main(String[] args) {
    System.out.println(new p007().solve());
  }

  public int solve() {
    int prime = 2;
    int i = 3;
    int primeCount = 1;
    while (primeCount < 10001) {
      if (isPrime(i)) {
        prime = i;
        primeCount++;
      }
      i++;
    }
    return prime;
  }

  private static boolean isPrime(int n) {
    if (n < 2 || (n % 2 == 0 && n != 2)) return false;
    for (int i = 3; i <= (n / 2); i += 2) {
      if (n % i == 0) return false;
    }
    return true;
  };
}
