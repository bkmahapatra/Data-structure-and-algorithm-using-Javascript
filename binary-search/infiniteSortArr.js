/**
 * Search in infinite sorted array (unbounded binary search)
 *
 * time: log(position)
 */

function infiSearch(arr, x) {
  if (arr[0] === x) return 0;

  let i = 1;
  while (arr[i] < x) {
    i *= 2;
    if (arr[i] === x) return i;
  }

  return binarySearch(arr, x, i / 2 + 1, i - 1);
}

function binarySearch(arr, x, low, high) {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) return mid;
    else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(infiSearch([1, 2, 4, 6, 9, 12, 15, 18, 21, 24, 27, 30], 15));
