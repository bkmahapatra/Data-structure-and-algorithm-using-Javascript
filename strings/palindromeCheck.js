/**
 * Palindrome check of the given string
 *
 * Time: O(n), Aux space: O(1)
 *
 * Idea:
 * By taking begin and end pointer
 *
 * Time: θ(n), Aux space: θ(n)
 */
function stringPalindromeCheck(str) {
  let begin = 0,
    end = str.length - 1;

  while (begin < end) {
    if (str[begin] !== str[end]) {
      return false;
    }

    begin++;
    end--;
  }

  return true;
}

console.log(stringPalindromeCheck("ABCDCBA"));
console.log(stringPalindromeCheck("geeks"));
