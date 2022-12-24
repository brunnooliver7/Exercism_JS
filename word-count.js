/**
 * 
 * @param {string} phrase 
 */
export const countWords = (phrase) => {
  let words = '';
  let res = {};

  // remover caracteres especiais
  words = phrase.replace(/[^a-zA-Z0-9' ]/g, ' ');
  words = words.replace(/(^"|"$)/g, '')

  // remover espaços duplicados
  words = words.replace(/\s+/g, ' ').trim()

  // remover aspas
  let arr = words.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "'" && (arr[i - 1] === " " || arr[i + 1] === " " || !arr[i + 1])) {
      arr.splice(i, 1);
    }
  }
  words = arr.join('')

  // montar objeto de resposta
  words = words.split(' ').sort();
  words.map(word => {
    if (!res[word.toLowerCase()])
      res[word.toLowerCase()] = words.filter(w => w.toLowerCase() === word.toLowerCase()).length;
  });

  return res;
}