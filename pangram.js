export const isPangram = (sentence) => {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  let sentenceArr = sentence
    .split('')
    .filter(character => character.match(/[a-zA-Z]/g))
    .filter(character => String(character).trim())
    .map(character => character.toLowerCase());

  return alphabet.every(character => sentenceArr.includes(character));
};
