/*
  PROBLEM 019
  How many Sundays fell on the first of the month during the twentieth century 
  (1 Jan 1901 to 31 Dec 2000)?
*/

import { NumberObj } from '../interfaces';

/*
  Compute the number of Sundays on the first of the month from 1901-2001.
  - Keep track of the number of days up to the current month (elapsed) and
    if the this is divisible by 7 after ajdusting to Sunday with 'offset'
    then the month starts on Sunday.
*/
export const countingSundays = (): number => {
  const month: NumberObj = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  const offset = 2; // Jan. 1 1901 is a Tuesday (2d after Sunday)
  let count = 0;
  let elapsed = 0;
  for (let i = 1901; i <= 2000; i++) {
    const leap = (i % 4 === 0);
    for (let j = 1; j <= 12; j++) {
      if ((elapsed + offset) % 7 === 0) { count++; }
      elapsed += (leap && j === 2) ? 29 : month[j];
    }
  }
  return count;
};
