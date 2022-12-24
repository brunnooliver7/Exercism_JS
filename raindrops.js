/**
* @param {number} num
* @returns {string}
*/
export const convert = (num) => {
  let res = '';

  if (num % 3 === 0) {
    res = res + 'Pling';
  }

  if (num % 5 === 0) {
    res = res + 'Plang';
  }
  
  if (num % 7 === 0) {
    res = res + 'Plong';
  }

  if (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
    res = num.toString();
  }

  return res;
};