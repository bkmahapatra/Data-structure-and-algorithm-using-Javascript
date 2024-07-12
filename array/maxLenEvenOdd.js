/**
 * maximum length even odd sub array
 * time: O(n), aux space: O(1)
 */
function maxEvenOddSubArr(arr) {
  let res = 1,
    count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (
      (arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) ||
      (arr[i - 1] % 2 === 0 && arr[i] % 2 !== 0)
    ) {
      count++;
      res = Math.max(res, count);
    } else {
      count = 1;
    }
  }

  return res;
}

console.log(maxEvenOddSubArr([10, 12, 14, 7, 8]));
