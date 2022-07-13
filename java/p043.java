import java.util.ArrayList;

/**
 * p043 - Compute all 0 to 9 pandigital numbers with a substring divisibility property.
 */
public final class p043 {

  public static void main(String[] args) {
    System.out.println(new p043().solve());
  }

  public long solve() {
    long sum = 0;
    ArrayList<String> pand = getPermutations("1234567890", "", new ArrayList<String>());

    for (int i = 0; i < pand.size(); i++) {
      String curr = pand.get(i);
      if (hasProperty(curr)) {
        sum += Long.parseLong(curr);
      }
    }
    return sum;
  }

  static ArrayList<String> getPermutations(String str, String frac, ArrayList<String> perms) {
    if (str.length() == 0) {
      perms.add(frac);
      return perms;
    }

    for (int i = 0; i < str.length(); i++) {
      char ch = str.charAt(i);
      String sub = str.substring(0, i) + str.substring(i + 1);
      perms = getPermutations(sub, frac + ch, perms);
    }

    return perms;
  }

  private static boolean hasProperty(String str) {
    final int[] DIV = { 2, 3, 5, 7, 11, 13, 17 };
    for (int i = 0; i < DIV.length; i++) {
      int digs = Integer.parseInt(str.substring(i + 1, i + 4));
      if (digs % DIV[i] != 0) return false;
    }
    return true;
  }
}