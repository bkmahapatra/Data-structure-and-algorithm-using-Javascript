/**
 * Print frequency of each character (in sorted order) in a string of lowercase alphabets
 *
 * Time: O(n)  Aux Space: O(1)
 *
 * idea:
 * take a array size of 26 and fill 0
 * loop through the string length the insert with char code
 * then again loop through the array and print counts by default sorted
 */

function printFrequency(str) {
  let charArray = new Array(26).fill(0);

  if (str === "") return;

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      // as small letters start with 97
      charArray[charCode - 97]++;
    }
  }

  for (let j = 0; j < 26; j++) {
    if (charArray[j] > 0) {
      let char = String.fromCharCode(j + 97);
      console.log(char + " : " + charArray[j]);
    }
  }
}

printFrequency("geeksforgeeks");
// e : 4
// f : 1
// g : 2
// k : 2
// o : 1
// r : 1
// s : 2
