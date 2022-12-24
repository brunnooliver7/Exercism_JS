/**
 * Calculates the Pascal's triangle rows.
 *
 * @param {number} n
 * @returns {number[][]} rows
 */
export const rows = (n) => {
  let rows = [];

  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j > 0 && j < i) {
        row.push(rows[i - 1][j - 1] + rows[i - 1][j]);
      } else {
        row.push(1);
      }
    }
    rows.push(row);
  }

  return rows;
};