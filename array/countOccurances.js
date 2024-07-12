import { firstOccurance } from "./firstOccurance.js";
import { lastOccurance } from "./lastOccurance.js";
/**
 * Count occurances in an array
 * time: O(log n), aux space: O(1)
 */

function countOcc(arr, x) {
  let firstOcc = firstOccurance(arr, x);

  if (firstOcc === -1) {
    return 0;
  } else {
    return lastOccurance(arr, x) - firstOcc + 1;
  }
}

console.log("ans: " + countOcc([1, 2, 3, 3, 5, 6, 7, 7, 7, 7, 8, 9, 10], 7));
