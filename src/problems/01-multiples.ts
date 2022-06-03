// 1. Find all the sum of all multiples of 3 and 5 below 1000.

export const sumMultiples = (max: number): number => {
  const multiples = [];
  for (let i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) { multiples.push(i); }
  }
  return multiples.reduce((num, sum) => num + sum, 0);
};
