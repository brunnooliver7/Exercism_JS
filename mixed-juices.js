// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5

    case 'Green Garden':
    case 'Energizer':
      return 1.5

    case 'Tropical Island':
      return 3

    case 'All or Nothing':
      return 5

    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limeWedgesCutted = 0;
  let iteratorCounter = 0;

  while (limeWedgesCutted < wedgesNeeded && limes.length > 0) {
    switch (limes[0]) {
      case 'small':
        limeWedgesCutted += 6;
        break;

      case 'medium':
        limeWedgesCutted += 8;
        break;

      case 'large':
        limeWedgesCutted += 10;
        break;

      default:
        break;
    }

    limes.shift();

    iteratorCounter++;
  }

  return iteratorCounter
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    timeLeft -= timeToMixJuice(orders[0])
    orders.shift()
  } while (timeLeft > 0)

  return orders;
}