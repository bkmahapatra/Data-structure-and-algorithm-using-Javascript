/**
 * Prefix Sum
 * time: O(n), aux space: O(n)
 */
function preFixSum(arr) {
  let pSum = [];

  pSum[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    pSum[i] = pSum[i - 1] + arr[i];
  }

  return function (start, end) {
    if (start === 0) {
      return pSum[end];
    }

    return pSum[end] - pSum[start - 1];
  };
}

let testArr = [2, 8, 3, 9, 6, 4];
const getSum = preFixSum(testArr);
console.log(getSum(0, 4));
console.log(getSum(3, 5));
