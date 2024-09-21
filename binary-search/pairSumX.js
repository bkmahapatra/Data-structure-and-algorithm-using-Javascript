/**
 * Find a pair if there is a pair with sum x in the sorted array
 * time: O(n), aux space: O(1)
 */

function isPairSumX(arr, x) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    const sum = arr[low] + arr[high];
    if (sum === x) return true;
    else if (sum < x) {
      low++;
    } else {
      high--;
    }
  }
  return false;
}
