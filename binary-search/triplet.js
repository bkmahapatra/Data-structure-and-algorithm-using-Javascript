/**
 * Find a pair if there is a pair with sum x in the sorted array
 * time: O(n^2), aux space: O(1)
 */

function pairSumX(arr, x, sIndex) {
  let low = sIndex,
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

function isTriplet(arr, x) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (pairSumX(arr, x - arr[i], i + 1)) {
      return true;
    }
  }

  return false;
}
