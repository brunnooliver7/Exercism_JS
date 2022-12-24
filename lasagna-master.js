/// <reference path="./global.d.ts" />
// @ts-check
export function cookingStatus(timeLeft) {
  if (timeLeft === 0) {
    return 'Lasagna is done.'
  }
  
  if (!timeLeft) {
    return 'You forgot to set the timer.'
  }
  return 'Not done, please wait.'
}
export function preparationTime(layers, n) {
  if (!n) {
    n = 2;
  }
  return layers.length * n;
}
export function quantities(layers) {
  const noodles = layers
    .filter(layer => layer === 'noodles')
    .length
    * 50;
  const sauce = layers
    .filter(layer => layer === 'sauce')
    .length
    * 0.2;
  return {noodles, sauce};
}
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length -1]);
}
export function scaleRecipe(recipe, n) {
  if (!n) n = 1;
  let recipeCopy = {...recipe};
  for (let [key, value] of Object.entries(recipeCopy)) {
    recipeCopy[key] = value * n /2
  }
  return recipeCopy;
}