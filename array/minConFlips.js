/**
 * Minimum consecutive flips
 * time: O(n), aux space: O(1)
 */

function minConFlips(arr) {
  const n = arr.length;
  let res = "\n";

  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] !== arr[0]) {
        res += " from " + i + " to ";
      } else {
        res += i - 1 + "\n";
      }
    }
  }

  if (arr[n - 1] !== arr[0]) {
    res += n - 1;
  }

  return res;
}

console.log(minConFlips([1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1]));
// from 2 to 4
// from 8 to 9
console.log(minConFlips([1, 1, 0, 0, 0, 1, 1, 1, 0, 0]));
// from 2 to 4
// from 8 to 9
