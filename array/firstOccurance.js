/**
 * First occurance in a sorted array
 *
 * Iterative
 * time: O(log n), aux space: O(1)
 */
export function firstOccurance(arr, x) {
  let low = 0,
    high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > x) {
      high = mid - 1;
    } else if (arr[mid] < x) {
      low = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== arr[mid]) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

console.log(firstOccurance([10, 20, 20, 30, 44, 66, 88, 99], 20));
console.log(firstOccurance([10, 20, 30, 44, 66, 88, 99, 99], 99));
console.log(firstOccurance([10, 20, 30, 44, 66, 88, 99], 66));
console.log(firstOccurance([10, 20, 30, 44, 66, 88, 99], 100));

/**
 * recursive
 * time: O(log n), aux space: O(n)
 */
function firstOccRec(arr, x, low, high) {
  if (low > high) {
    return -1;
  }
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] > x) {
    return firstOccRec(arr, x, low, mid - 1);
  } else if (arr[mid] < x) {
    return firstOccRec(arr, x, mid + 1, high);
  } else {
    if (mid === 0 || arr[mid - 1] !== arr[mid]) {
      return mid;
    } else {
      high = mid - 1;
    }
  }
}

console.log(firstOccRec([10, 20, 20, 30, 44, 66, 88, 99], 20, 0, 7));
console.log(firstOccRec([10, 20, 30, 44, 66, 88, 99, 99], 99, 0, 7));
console.log(firstOccRec([10, 20, 30, 44, 66, 88, 99], 66, 0, 6));
console.log(firstOccRec([10, 20, 30, 44, 66, 88, 99], 100, 0, 6));
