/*
  PROBLEM 022
  What is the total of all the name scores in the file p022_names.txt?
*/

import fs from 'fs';

/*
  Compute the sum alphabetical value of a word.
  - Convert string chars to their UTF-16 code unit and subtract 64 to find the value.
*/
const getScore = (word: string): number => {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += (word.toUpperCase().charCodeAt(i) - 64);
  }
  return score;
};

/*
  Compute the sum of name scores for all the names in the file p022_names.txt, where the score
  is the sum of the alphabetical value of all letters multiplied by the name's alphabetical
  position in the list of names.
*/
export const nameScores = (): number => {
  let score = 0;
  const data = fs.readFileSync(require('path').resolve(__dirname, '../files/p022_names.txt'));
  const names = data.toString().replaceAll('"', '').split(',').sort();
  for (let i = 0; i < names.length; i++) {
    score += (getScore(names[i]) * (i + 1));
  }
  return score;
};
