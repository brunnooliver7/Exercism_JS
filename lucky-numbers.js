// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const sum1 = array1.reduce((prev, curr) => prev.toString() + curr.toString());
  const sum2 = array2.reduce((prev, curr) => prev.toString() + curr.toString());
  return +sum1 + +sum2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return (value.toString() === value.toString().split('').reverse().join(''))
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return 'Required field'
  }

  if (Number(input) <= 0 || Number.isNaN(+input)) {
    return 'Must be a number besides 0'
  }

  return ''
}
