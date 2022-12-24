const GIGASECOND_IN_MS = 10**12

/**
* @param {Date} input
* @returns {Date}
*/
export const gigasecond = (input) => {
  const date = new Date(input)
  const miliseconds = date.getTime();
  const momentAfterGigaSecond = miliseconds + GIGASECOND_IN_MS;
  return new Date(momentAfterGigaSecond);
};