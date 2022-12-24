/**
 * Find the set of anagrams
 * @param {string} target 
 * @param {string[]} candidates 
 */
export const findAnagrams = (target, candidates) => {
  let res = [];

  candidates.map((word, i) => {
    if (
      target.split('').map((el, i, arr) => arr[i] = el.toLowerCase()).sort().join('') ===
      word.split('').map((el, i, arr) => arr[i] = el.toLowerCase()).sort().join('')
    ) {
      res.push(candidates[i]);
    }

    if (
      target.split('').map((el, i, arr) => arr[i] = el.toLowerCase()).join('') ===
      word.split('').map((el, i, arr) => arr[i] = el.toLowerCase()).join('')
    ) {
      res.pop();
    }
  });

  return res;
};