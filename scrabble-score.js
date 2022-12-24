/**
 * 
 * @param {string} word 
 */

export const score = (word) => {
  const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
  const twoPoints = ['D', 'G'];
  const threePoints = ['B', 'C', 'M', 'P'];
  const fourPoints = ['F', 'H', 'V', 'W', 'Y'];
  const fivePoints = ['K'];
  const eightPoints = ['J', 'X'];
  const tenPoints = ['Q', 'Z'];

  let points = 0;

  word = word.toUpperCase();
  let wordCopy = word.split('');

  wordCopy.map(letter => {
    switch (letter) {
      case onePoint.includes(letter) ? letter : null:
        points += 1;
        break;

      case twoPoints.includes(letter) ? letter : null:
        points += 2;
        break;

      case threePoints.includes(letter) ? letter : null:
        points += 3;
        break;

      case fourPoints.includes(letter) ? letter : null:
        points += 4;
        break;

      case fivePoints.includes(letter) ? letter : null:
        points += 5;
        break;

      case eightPoints.includes(letter) ? letter : null:
        points += 8;
        break;

      case tenPoints.includes(letter) ? letter : null:
        points += 10;
        break;

      default:
        break;
    }
  });

  return points;
};