/*
  PROBLEM 017
  If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words,
  how many letters would be used?
*/

import { NumberObj } from '../interfaces';

/*
  Compute the number of letters for all numbers between 1 and a given number (num) up to 9999.
*/
export const numberLetterCount = (num: number) => {
  // Single digit number letter count ('one' is 3, 'two' is etc.)
  const singleDig: NumberObj = {
    1: 3,
    2: 3,
    3: 5,
    4: 4,
    5: 4,
    6: 3,
    7: 5,
    8: 5,
    9: 4,
  };
  // Teen digit letter count ('eleven' is 6, 'twelve' is 6, etc.)
  const teenDig: NumberObj = {
    1: 6,
    2: 6,
    3: 8,
    4: 8,
    5: 7,
    6: 7,
    7: 9,
    8: 8,
    9: 8,
  };
  // Double digit number letter count ('ten' is 3, 'twenty' is 6, etc.)
  const doubleDig: NumberObj = {
    1: 3,
    2: 6,
    3: 6,
    4: 5,
    5: 5,
    6: 5,
    7: 7,
    8: 6,
    9: 6,
  };
  let count = 0;

  for (let i = num; i > 0; i--) {
    const arr = Array.from(String(i), str => Number(str));
    const thou = arr.at(-4);
    const hund = arr.at(-3);
    const tens = arr.at(-2);
    const ones = arr.at(-1);
  
    if (thou) {
      count += (8 + singleDig[thou]); // 'thousand'
    }
    if (hund) {
      count += (7 + singleDig[hund]); // 'hundred'
    }
    if (tens) {
      if (thou || hund) { count += 3; } // 'and'
      if (tens === 1) {
        count += (ones) ? teenDig[ones] : doubleDig[tens]; // account for 10
        continue;
      }
      count += doubleDig[tens];
    }
    if (ones) {
      if ((thou || hund) && !tens ) { count += 3; } // 'and'
      count += singleDig[ones];
    }
  }
  return count;
};
