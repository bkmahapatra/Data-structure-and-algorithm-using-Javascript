/**
 * Find a peak Element (not smaller than left & right neighbours)
 * time: O(log n), aux space: O(1)
 */
function findPeak(arr) {
  const n = arr.length;
  let low = 0,
    high = n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (
      (mid === 0 || arr[mid] >= arr[mid - 1]) &&
      (mid === n - 1 || arr[mid] >= arr[mid + 1])
    ) {
      return mid;
    } else if (mid > 0 && arr[mid] <= arr[mid - 1]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

console.log(findPeak([2, 5, 6, 8, 10]));
