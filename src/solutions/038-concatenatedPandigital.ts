/*
  PROBLEM 038
  What is the largest 1 to 9 pandigital 9-digit number that can be formed
  as the concatenated product of an integer with (1,2, ... , n) where n > 1?
*/

/*
  Compute the largest 1 to 9 pandigital 9-digit number formed as the concatenated product of an integer with n.
  - Assume that the largest pandigital product will be made with integer (i) beginning with 9. (See lines 27-29)
  - A valid starting point is therefore 9999 since a 5-digit number starting with 9 cannot be multiplied by 2
    and concatenated, without the concatenated product exceeding 9 digits.
*/
export const concatenatedPandigital = (): number => {
  const isPandigital = (numStr: string): boolean => (numStr.length === 9 && !numStr.includes('0') && (new Set(numStr)).size === numStr.length);

  let i = 9999;
  let pan = 0;
  while (i > 8) {
    let str = i.toString();
    let n = 2;
    while (str.length < 9) {
      str += ((i * n).toString());
      if (isPandigital(str) && parseInt(str) > pan) pan = parseInt(str);
      n++;
    }
    i--;
    if (i === 8999) i = 999;
    if (i === 899) i = 99;
    if (i === 89) i = 9;
  }
  return pan;
};
