/**
 * Reverse words in a string
 *
 * Idea:
 * abc bcd def
 * cba dcb fed
 * def bcd cba
 */
function reverseWords(s) {
  let str = s.split("");
  let start = 0;

  //   reverse each word
  for (let end = 0; end < str.length; end++) {
    if (str[end] === " ") {
      reverse(str, start, end);
      start = end + 1;
    }
  }

  //   reverse last word
  reverse(str, start, str.length - 1);

  //   reverse entire string
  reverse(str, 0, str.length - 1);

  return str.join("");
}

function reverse(str, start, end) {
  while (start <= end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;

    start++;
    end--;
  }
}

const res = reverseWords("life is too short to argue ");
console.log(res);
