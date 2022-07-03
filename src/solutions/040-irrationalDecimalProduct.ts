/*
  PROBLEM 040
  If dn represents the nth digit of the fractional part, find the value of the
  following expression: d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

/*
  Compute the value of d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
  where d is a decimal created by concatenating the positive integers.
*/
export const irrationalDecimalProduct = (): number => {
  let d = '';
  let i = 1;
  while (d.length < 1000000) {
    d += (i.toString());
    i++;
  }
  return parseInt(d.slice(0, 1)) * parseInt(d.slice(9, 10)) * parseInt(d.slice(99, 100)) *
         parseInt(d.slice(999, 1000)) * parseInt(d.slice(9999, 10000)) *
         parseInt(d.slice(99999, 100000)) * parseInt(d.slice(999999, 1000000));
};
