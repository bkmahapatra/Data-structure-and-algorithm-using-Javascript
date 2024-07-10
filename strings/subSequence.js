/**
 * Check if a string is sub sequence of other
 *
 */

/**
 * Iterative
 * Time: O(n+m) , Aux space: O(1)
 *
 * Idea:
 * take a var substring length count with value 0
 * then loop through the condition and update the count if two char matches
 * return true if substring and the var count length is equal
 */
function checkSubSequence(str, subStr) {
  const n = str.length,
    m = subStr.length;

  if (n < m) {
    return false;
  }

  let subLen = 0;

  for (let i = 0; i < n && subLen < m; i++) {
    if (str[i] === subStr[subLen]) {
      subLen++;
    }
  }

  return subLen === m;
}

/** recursive
 *  Time: O(n+m) , Aux space: O(n+m)
 */
function checkSubSequenceRec(str, subStr, n, m) {
  if (m === 0) {
    return true;
  }
  if (n === 0) {
    return false;
  }

  if (str[n - 1] === subStr[m - 1]) {
    return checkSubSequenceRec(str, subStr, n - 1, m - 1);
  } else {
    return checkSubSequenceRec(str, subStr, n - 1, m);
  }
}

console.log(checkSubSequence("ABCDEFGH", "AEG"));
console.log(checkSubSequence("ABCDEFGH", "AED"));
console.log(checkSubSequenceRec("ABCDEFGH", "AEG", 8, 3));
console.log(checkSubSequenceRec("ABCDEFGH", "AED", 8, 3));
