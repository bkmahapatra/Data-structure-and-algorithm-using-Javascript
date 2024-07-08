/**
 * Is array sorted or not
 *
 * time: O(n), aux space: O(1)
 */

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      console.log(i);
      return false;
    }
  }

  return true;
}

console.log(isSorted([1, 2, 5, 3, 10]));
console.log(isSorted([1, 2, 5, 10, 12, 26]));
