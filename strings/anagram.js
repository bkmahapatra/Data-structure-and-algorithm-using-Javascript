/**
 * check if two given strings are anagram of each other
 * listen=silent
 *
 * Time: O(n+k), Aux space: O(k)
 *
 * Idea:
 * take an array of 256 length to store count of chars in the first string
 * loop through the 1st string and increase count of each char
 * loop through the 2nd string and decrease count of each char
 * loop and check if any index is not has 0 value
 */

function isAnagramString(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let charCount = new Array(256).fill(0);

  for (let i = 0; i < str1.length; i++) {
    charCount[str1.charCodeAt(i)]++;
    charCount[str2.charCodeAt(i)]--;
  }

  for (let i = 0; i < charCount.length; i++) {
    if (charCount[i] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagramString("listen", "silent"));
console.log(isAnagramString("Window", "Wizard"));
