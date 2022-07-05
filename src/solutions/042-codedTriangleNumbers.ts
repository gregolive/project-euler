/*
  PROBLEM 042
  Using words.txt, how many are triangle words?
*/

import fs from 'fs';

/*
  Compute the number of triangle words in the file p022_names.txt.
*/
export const codedTriangleNumbers = (): number => {
  const getScore = (word: string): number => {
    let score = 0;
    for (let i = 0; i < word.length; i++) score += (word.charCodeAt(i) - 64);
    return score;
  };

  let triangles = 0;
  const data = fs.readFileSync(require('path').resolve(__dirname, '../files/p042_words.txt'));
  const words = data.toString().replaceAll('"', '').split(',').sort();
  for (let i = 0; i < words.length; i++) {
    const score = getScore(words[i]);
    if ((- (1 - Math.sqrt(1 + 8 * score)) / 2) % 1 === 0) triangles++;
  }
  return triangles;
};
