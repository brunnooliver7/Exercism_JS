// @ts-check

/**
 * 
 * @param {number} n 
 */
export const primeFactors = (n) => {
  let remnant = n;
  let factor = 2;
  let arr = [];

  if (n === 2 || n === 3) {
    arr.push(n);
  }

  while (factor <= n / 2 && remnant !== 1) {    
    if (remnant % factor === 0) {
      arr.push(factor);
      remnant = remnant / factor
    } else {
      factor++;
    }
  }

  return arr;
};