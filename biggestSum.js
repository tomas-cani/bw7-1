/**
 * Returns the previous pair
 *
 * @param {Array} pairedNumbers - The already paired numbers.
 * @return {Array} the previous pair
 */
function prevPair(pairedNumbers) {
  return pairedNumbers[pairedNumbers.length - 1];
}

/**
 * Checks if the number should be added to the previous pair
 *
 * @param {Array} pairedNumbers - The already paired numbers.
 * @param {number} number - The number to add.
 * @return {boolean} if the number should be added
 */
function shouldAddToPreviousPair(pairedNumbers, number) {
  let previousPair = prevPair(pairedNumbers);
  let pairLength = previousPair.length;
  let pairNumber = previousPair[0];
  return pairLength === 0 || (pairLength === 1 &&
    pairNumber * number > pairNumber && pairNumber !== 1);
}

/**
 * Adds a number to a previous pair or to a new one
 *
 * @param {Array} pairedNumbers - The already paired numbers.
 * @param {number} number - The number to add.
 * @return {Array} the paired numbers
 */
function pairNumber(pairedNumbers, number) {
  if (shouldAddToPreviousPair(pairedNumbers, number)) {
    prevPair(pairedNumbers).push(number);
  } else {
    pairedNumbers.push([number]);
  }
  return pairedNumbers;
}

/**
 * Multiplies the pair and adds the result
 *
 * @param {number} sum - The current sum.
 * @param {Array} pair - The pair to add.
 * @return {number} the biggest sum
 */
function addPair(sum, pair) {
  return sum + (pair.length === 2 ? pair[0] * pair[1] : pair[0]);
}

module.exports = function(numbers) {
  return numbers.sort((a, b) => a - b)
    .reduce(pairNumber, [[]])
    .reduce(addPair, 0);
};
