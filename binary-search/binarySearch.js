/**
 * Binary search (Iterative)
 * time: O(log n), aux space: O(1)
 */
function bSearch(arr, x) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === x) return mid;
    else if (arr[mid] > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

/**
 * recursive
 * time: O(log n), aux space: O(n)
 */

function bSearchRec(arr, x, low, high) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === x) return mid;
  else if (arr[mid] > x) {
    bSearchRec(arr, x, low, mid - 1);
  } else {
    bSearchRec(arr, x, mid + 1, high);
  }
}
