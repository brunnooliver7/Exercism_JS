// @ts-check

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
 export function translate2d(dx, dy) {
  return function moveCoordinatesRight2Px(x, y) {
    return [x + dx, y + dy];
  }
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function moveCoordinatesRight2Px(x, y) {
    return [x * sx, y * sy];
  }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {

  const moveCoordinatesRight2Px = translate2d(2, 0);
  const doubleCoordinates = scale2d(2, 2);

  return function (x, y) {
    let res = f(x, y);
    return g(res[0], res[1])
  }
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let inputA;
  let inputB;
  let result;
  
  return function(x, y) {
    if (x === inputA && y === inputB && result) {
      return result;
    }
    inputA = x;
    inputB = y;
    result = f(x, y);
    return result;
  }
}
