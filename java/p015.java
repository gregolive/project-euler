/**
 * p015 - Compute the number of lattice paths through a 20x20 grid.
 */
public class p015 {
  
  public static void main(String[] args) {
    System.out.println(new p015().solve());
  }

  public long solve() {
    final int GRID = 20;
    long pathCount = 1;
    for (int i = 1; i <= GRID; i++) {
      pathCount = pathCount * (GRID + i) / i;
    }
    return pathCount;
  }
}
