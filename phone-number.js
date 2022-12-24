/**
* @param {string} input
* @return {string}
*/
const clean = (input) => {
  const letters = /[a-zA-Z]/g;
  const ponctuation = /[!@#$%^&*_\=\[\]{};':"\\|,<>\/?]/g;

  // characters checks

  if (letters.test(input)) {
    throw new Error('Letters not permitted');
  }
  
  if (ponctuation.test(input)) {
    throw new Error('Punctuations not permitted');
  }

  // length checks

  let cleanNumber = input.replace(letters, '');
  cleanNumber = input.replace(ponctuation, '');
  cleanNumber = input.replace(/[()-. ]/g, '');

  if (cleanNumber.length < 10) {
    throw new Error('Incorrect number of digits')
  }
  
  if (cleanNumber.length === 12 && cleanNumber.charAt(0) === '1') {
    cleanNumber = cleanNumber.substring(1, cleanNumber.length);
  }

  if (cleanNumber.length > 11) {
    throw new Error('More than 11 digits')
  }

  if (cleanNumber.length === 11 && cleanNumber.charAt(0) !== '1') {
    throw new Error('11 digits must start with 1')
  }

  if (cleanNumber.length === 11 && cleanNumber.charAt(0) === '1') {
    cleanNumber = cleanNumber.substring(1, cleanNumber.length);
  }

  // exchange code checks

  if (cleanNumber.charAt(0) === '0') {
    throw new Error('Area code cannot start with zero')
  }

  if (cleanNumber.charAt(0) === '1') {
    throw new Error('Area code cannot start with one')
  }

  if (cleanNumber.charAt(3) === '0') {
    throw new Error('Exchange code cannot start with zero')
  }

  if (cleanNumber.charAt(3) === '1') {
    throw new Error('Exchange code cannot start with one')
  }

  return cleanNumber;
};