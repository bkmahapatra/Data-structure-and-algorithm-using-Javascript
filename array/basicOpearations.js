/**
 * Basic operations
 */

// search time: O(n) unsorted
function search(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
}

// insert time: O(n)
function insert(arr, x, pos) {
  //in java & c check length is not greater thatn capacity

  const n = arr.length;
  let idx = pos - 1;

  for (let i = n - 1; i >= idx; i--) {
    arr[i + 1] = arr[i];
  }

  arr[idx] = x;

  return n + 1;
}

// delete time: O(n)
function deleteElement(arr, x) {
  const n = arr.length;
  let i;

  for (i = 0; i < n; i++) {
    if (arr[i] === x) {
      break;
    }
  }

  if (i === n) return n;

  for (i; i < n; i++) {
    arr[i] = arr[i + 1];
  }

  return n - 1;
}

let ar = [1, 2, 4, 5];
// console.log(insert(ar, 3, 3));
// console.log(search(ar, 4));
// console.log(ar);

function swap(arr, low, high) {
  let temp = arr[low];
  arr[low] = arr[high];
  arr[high] = temp;
}

module.export = { swap };
