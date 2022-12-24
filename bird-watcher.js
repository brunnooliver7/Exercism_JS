// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((total, value) => total + value);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let total = 0;

  for (let i = 0; i < 7; i++) {
    total = total + birdsPerDay[i + 7 * (week - 1)];
  }

  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  birdsPerDay.map((element, index) => {
    if (index % 2 === 0) {
      birdsPerDay[index] = birdsPerDay[index] + 1;
    }
  });

  return birdsPerDay;
}
