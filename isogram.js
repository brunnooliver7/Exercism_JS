/**
* @param {string} word
* @return {string}
*/
const isIsogram = (word) => {
  const regexLetter = /[a-zA-Z]/;

  for (let i = 0; i < [...word].length; i++) {
    const letterI = [...word][i];

    for (let j = i + 1; j < [...word].length; j++) {
      const letterJ = [...word][j];

      if (
        letterI.toLowerCase() === letterJ.toLowerCase() && 
        regexLetter.test(letterI) &&
        regexLetter.test(letterJ)
      ) return false;
    }
  }

  return true;
};