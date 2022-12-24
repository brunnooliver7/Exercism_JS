/**
 * 
 * @param {string} value 
 */
export const valid = (value) => {
  // check if theere's any letters or special characters
  if (
    (/[a-zA-Z]/).test(value) ||
    (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(value)
  ) {
    return false;
  }

  // format string
  let formatadedValue = value.replace(/\D/g, '');
  if (formatadedValue.length === 1) {
    return false;
  }

  // reverse the string
  formatadedValue = formatadedValue.split('').reverse().join('');

  // create the double value array
  let doubleDigits = [];
  for (let i = 1; i < formatadedValue.length; i += 2) {
    if (formatadedValue[i] * 2 > 9) {
      doubleDigits.push(((formatadedValue[i] * 2) - 9))
    } else {
      doubleDigits.push((formatadedValue[i] * 2))
    }
  }

  // remake the string
  let newValue = formatadedValue.split('');
  for (let i = 0; i < doubleDigits.length; i++) {
    newValue.splice((i * 2) + 1, 1, doubleDigits[i].toString())
  }

  // check if it's valid
  let sum = newValue.reduce((acc, curr) => {
    // return acc + parseInt(curr)
    // return acc + +curr
    return acc + Number(curr)
  }, 0)
  return (sum % 10 === 0);
}