/**
 * p004 - Compute the largest palindrome made from the product of two 3-digit numbers.
 */
public final class p004 {
  
  public static void main(String[] args) {
    System.out.println(new p004().solve());
  }

  public int solve() {
    int product = 0;
    for (int i = 999; i > 99; i--) {
      for (int j = 999; j > 99; j--) {
        if ((i * j) > product && isPalindrome(i * j)) product = i * j;
      }
    }
    return product;
  }

  private static boolean isPalindrome(int n) {
    String s = String.valueOf(n);
    for (int i = 0; i < (s.length() / 2); i++) {
      if (s.charAt(i) != s.charAt(s.length() - i - 1)) return false;
    }
    return true;
  }
}
