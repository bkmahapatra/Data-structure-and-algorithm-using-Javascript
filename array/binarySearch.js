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

console.log(bSearch([10, 20, 30, 44, 66, 88, 99], 20));
console.log(bSearch([10, 20, 30, 44, 66, 88, 99], 99));
console.log(bSearch([10, 20, 30, 44, 66, 88, 99], 100));

/**
 * recursive
 * time: O(log n), aux space: O(n)
 */
function brSearch(arr, x, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === x) return mid;
  else if (arr[mid] > x) {
    return brSearch(arr, x, low, mid - 1);
  } else {
    return brSearch(arr, x, mid + 1, high);
  }
}

console.log(brSearch([10, 20, 30, 44, 66, 88, 99], 20, 0, 6));
console.log(brSearch([10, 20, 30, 44, 66, 88, 99], 99, 0, 6));
console.log(brSearch([10, 20, 30, 44, 66, 88, 99], 100, 0, 6));
