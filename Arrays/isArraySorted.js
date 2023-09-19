/* time: O(n) */
function isArraySorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }

  return true;
}

var array = [1, 12, 43];
console.log(isArraySorted(array));
