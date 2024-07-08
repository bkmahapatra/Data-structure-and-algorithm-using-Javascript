/**
 * Time: O(n)
 */
function largestNum(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[res]) {
      res = i;
    }
  }

  return res;
}

// 12,13,21,50,9
