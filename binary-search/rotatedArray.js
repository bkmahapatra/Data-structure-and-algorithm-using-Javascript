/**
 * Search in a sorted rotated array
 * time: O(log n), aux space: O(1)
 */
function rotatedArraySearch(arr, x) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) return mid;

    if (arr[low] <= arr[mid]) {
      if (x >= arr[low] && x < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (x > arr[mid] && x <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
}
console.log(rotatedArraySearch([3, 4, 5, 6, 1, 2], 1));
