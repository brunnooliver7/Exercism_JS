/**
* @param {string} message
* @returns {string}
*/
export const hey = (message) => {
  message = message.trim();
  
  const lastCharacter = message.charAt(message.length - 1);
  
  if (!message) {
    return "Fine. Be that way!"
  } else if (checkUpperCaseString(message) && lastCharacter === '?') {
    return "Calm down, I know what I'm doing!";
  } else if (lastCharacter === '?') {
    return "Sure.";
  } else if (checkUpperCaseString(message)) {
    return "Whoa, chill out!";
  } else {
    return "Whatever.";
  }
};

function checkUpperCaseString(str) {
  var format = /^[a-zA-Z]+$/;

  return ![...str].find(letter => letter !== letter.toUpperCase()) &&
  [...str].find(letter => format.test(letter))
}