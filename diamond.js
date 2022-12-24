/**
 * Generate the dimaond pattern based on a letter
 * @param {string} letter 
 */
export const rows = (letter) => {
  const alhpabetic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = [...alhpabetic].indexOf(letter.toUpperCase());
  let res = [];

  for (let i = -index; i <= index; i++) {
    let row = '';

    const letterIndex = index - Math.abs(i);

    for (let j = -index; j <= index; j++) {
      if (Math.abs(j) === letterIndex) {
        row += [...alhpabetic][letterIndex]
      } else {
        row += ' ';
      }
    }

    res.push(row);
  }

  return res;
};