/*
  PROBLEM 015
  Starting in the top left corner of a 2×2 grid, and only being able to move to the
  right and down, there are exactly 6 routes to the bottom right corner.
  How many such routes are there through a 20×20 grid?
*/

/*
  Computes the number of lattice paths through a square grid of given rows/cols (size).
*/
export const latticePaths = (size: number): number => {
  let pathCount = 1;
  for (let i = 1; i <= size; i++) {
    pathCount = pathCount * (size + i) / i;
  }
  return pathCount;
};
